import { IUser } from 'src/user/domain/user.domain';
import { FindUserFieldsType } from './user.model.type';
import { FindFilter } from 'src/common/types';

export interface IUserModel {
  findAll(fields: FindUserFieldsType, filter: FindFilter): Promise<IUser[]>;
  createOne(user: IUser): Promise<void>;
  updateOne(user: IUser): Promise<void>;
  deleteOne(user: IUser): Promise<void>;
}
