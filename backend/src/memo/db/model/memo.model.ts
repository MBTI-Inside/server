import { Injectable } from '@nestjs/common';
import { IMemoModel } from './memo.model.interface';
import { InjectModel } from '@nestjs/mongoose';
import { MemoEntity } from '../schema/memo.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { Model } from 'mongoose';
import { IMemo, IMemoProperties, Memo } from 'src/memo/domain/memo.domain';
import { FindFilter } from 'src/common/types';
import { FindMemoFieldsType } from 'src/memo/service/type/type';
import { from, lastValueFrom, map, toArray } from 'rxjs';
import {
  changeObjectIdToStringId,
  changeStringIdToObjectId
} from 'src/util/converter';

@Injectable()
export class MemoModel implements IMemoModel {
  constructor(
    @InjectModel(MemoEntity.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly memoModel: Model<MemoEntity>
  ) {}

  async findAll(
    { id, parentMemoId, color }: FindMemoFieldsType,
    { limit = 100, skip = 0, sortField = '_id', sortType = 'desc' }: FindFilter
  ): Promise<IMemo[]> {
    const memoCursor = this.memoModel
      .find()
      .where({
        ...(id?.length
          ? { _id: { $in: id.map(changeStringIdToObjectId) } }
          : {}),
        ...(parentMemoId?.length
          ? { parentMemoId: { $in: parentMemoId } }
          : {}),
        ...(color?.length ? { color: { $in: color } } : {})
      })
      .select({ password: 0 })
      .limit(limit)
      .skip(skip)
      .sort({ [sortField]: sortType })
      .lean()
      .cursor();

    return lastValueFrom(
      from(memoCursor).pipe(
        map((memo) => Memo.new(changeObjectIdToStringId(memo))),
        toArray()
      )
    );
  }

  async createOne(memo: IMemo): Promise<IMemo> {
    const createdMemo = await (
      await this.memoModel.create(memo.properties)
    ).save();
    delete createdMemo.password;
    return changeObjectIdToStringId(createdMemo);
  }

  async updateOne(memo: IMemo): Promise<IMemo> {
    const updatedMemo = this.memoModel
      .findByIdAndUpdate(memo.getId, memo.properties, {
        new: true
      })
      .cursor();

    return lastValueFrom(
      from(updatedMemo).pipe(
        map((memo) => {
          delete memo.password;
          return Memo.new(changeObjectIdToStringId(memo));
        })
      )
    );
  }

  async increaseLikeCount(memoId: string): Promise<IMemo> {
    const updatedMemo = this.memoModel
      .findByIdAndUpdate(
        changeStringIdToObjectId(memoId),
        { $inc: { likeCount: 1 } },
        { new: true, fields: { likeCount: 1 } }
      )
      .cursor();

    return lastValueFrom(
      from(updatedMemo).pipe(
        map((memo) => {
          delete memo.password;
          return Memo.new(changeObjectIdToStringId(memo));
        })
      )
    );
  }

  async deleteOne(memoId: string): Promise<void> {
    await this.memoModel.findByIdAndDelete(changeStringIdToObjectId(memoId));
  }
}
