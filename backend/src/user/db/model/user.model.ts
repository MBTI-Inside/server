import { Injectable } from '@nestjs/common';
import { IUserModel } from './user.model.interface';
import { IUser, User } from 'src/user/domain/user.domain';
import { FindFilter } from 'src/common/types';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from '../schema/user.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { Model } from 'mongoose';
import {
  changeObjectIdToStringId,
  changeStringIdToObjectId
} from 'src/util/converter';
import { FindUserFieldsType } from 'src/user/service/type/type';

export const MONGO_USER_MODEL = 'MONGO_USER_MODEL';

@Injectable()
export class UserModel implements IUserModel {
  constructor(
    @InjectModel(UserEntity.name, MONGO_ARE_YOU_T_DATABASE)
    private readonly userModel: Model<UserEntity>
  ) {}
  async findAll(
    { id, name }: FindUserFieldsType,
    { limit, skip, sortField, sortType }: FindFilter = {
      limit: 100,
      skip: 0,
      sortField: '_id',
      sortType: 'desc'
    }
  ): Promise<IUser[]> {
    const users: IUser[] = [];
    const usersCursor = this.userModel
      .find()
      .where({
        ...(id?.length ? { id: { $in: id } } : {}),
        ...(name?.length ? { name: { $in: name } } : {})
      })
      .limit(limit)
      .skip(skip)
      .sort({ [sortField]: sortType })
      .lean()
      .cursor();

    for await (const user of usersCursor) {
      users.push(User.new(changeObjectIdToStringId(user)));
    }

    return users;
  }

  async createOne(user: IUser): Promise<void> {
    await this.userModel.create(user);
  }
  async updateOne(user: IUser): Promise<void> {
    await this.userModel
      .findByIdAndUpdate(changeStringIdToObjectId(user.getId), user.properties)
      .lean()
      .exec();
  }
  async deleteOne(user: IUser): Promise<void> {
    await this.userModel
      .findByIdAndDelete(changeStringIdToObjectId(user.getId))
      .lean()
      .exec();
  }
}
