import { IUser } from 'src/user/domain/user.domain';
import { FindFilter } from 'src/common/types';
import { FindUserFieldsType } from 'src/user/service/type/type';

export interface IUserModel {
  findAll(fields: FindUserFieldsType, filter?: FindFilter): Promise<IUser[]>;
  createOne(user: IUser): Promise<void>;
  updateOne(user: IUser): Promise<void>;
  deleteOne(user: IUser): Promise<void>;
}
