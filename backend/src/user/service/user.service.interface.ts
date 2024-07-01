import { IUser } from '../domain/user.domain';
import { CreateUserCommand } from './command/create-user.command';
import { DeleteUserCommand } from './command/delete-user.command';
import { UpdateUserCommand } from './command/update-user.command';
import { GetQuery } from './query/get.query';

export interface IUserService {
  get(query: GetQuery): Promise<IUser[]>;
  createOne(command: CreateUserCommand): Promise<void>;
  updateOne(command: UpdateUserCommand): Promise<void>;
  deleteOne(command: DeleteUserCommand): Promise<void>;
}
