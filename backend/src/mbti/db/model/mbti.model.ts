import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MbtiEntity } from '../schema/mbti.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { Model } from 'mongoose';
import { IMbtiModel } from './mbti.interface';
import { SortType } from 'src/common/types';
import { IMbti, Mbti } from 'src/mbti/domain/mbti.domain';
import {
  changeObjectIdToStringId,
  changeStringIdToObjectId
} from 'src/util/converter';

export const MONGO_MBTI_MODEL = 'MONGO_MBTI_MODEL';

@Injectable()
export class MbtiModel implements IMbtiModel {
  constructor(
    @InjectModel(MbtiEntity.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly mbtiModel: Model<MbtiEntity>
  ) {}
  async findAll({
    limit = 100,
    skip = 0,
    sortField = '_id',
    sortType = 'desc'
  }: {
    limit: number;
    skip: number;
    sortField: string;
    sortType: SortType;
  }): Promise<IMbti[]> {
    let sortKey: string;
    switch (sortField) {
      case 'id':
        sortKey = '_id';
        break;
    }

    const mbtis: IMbti[] = [];
    const mbtisCursor = this.mbtiModel
      .find()
      .limit(limit)
      .skip(skip)
      .sort({ [sortKey]: sortType })
      .lean()
      .cursor();

    for await (const mbti of mbtisCursor) {
      mbtis.push(Mbti.new(changeObjectIdToStringId(mbti)));
    }

    return mbtis;
  }
  async findOneById(mbtiId: string): Promise<IMbti> {
    const mbti = await this.mbtiModel
      .findOne({ _id: changeStringIdToObjectId(mbtiId) })
      .lean()
      .exec();

    return Mbti.new(changeObjectIdToStringId(mbti));
  }

  async createOne(mbti: IMbti): Promise<void> {
    await this.mbtiModel.create(mbti);
  }

  async updateOne(mbti: IMbti): Promise<void> {
    await this.mbtiModel
      .findByIdAndUpdate(changeStringIdToObjectId(mbti.getId), mbti.properties)
      .lean()
      .exec();
  }

  async deleteOne(mbti: IMbti): Promise<void> {
    await this.mbtiModel
      .findByIdAndDelete(changeStringIdToObjectId(mbti.getId))
      .lean()
      .exec();
  }
}
