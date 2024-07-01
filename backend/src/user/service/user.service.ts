import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './user.service.interface';
import { MONGO_USER_MODEL } from '../db/model/user.model';
import { IUserModel } from '../db/model/user.model.interface';
import { IUser, User } from '../domain/user.domain';
import { CreateUserCommand } from './command/create-user.command';
import { DeleteUserCommand } from './command/delete-user.command';
import { UpdateUserCommand } from './command/update-user.command';
import { GetQuery } from './query/get.query';

export const USER_SERVICE = 'USER_SERVICE';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(MONGO_USER_MODEL) private readonly userModel: IUserModel
  ) {}
  get({ fields, filter }: GetQuery): Promise<IUser[]> {
    const { id, name } = fields;
    const { limit, skip, sortField, sortType } = filter;
    return this.userModel.findAll(
      { id, name },
      { limit, skip, sortField, sortType }
    );
  }
  async createOne({ name, email, password }: CreateUserCommand): Promise<void> {
    const user = User.new({ name, email, password });
    return this.userModel.createOne(user);
  }
  async updateOne({ id, name, email }: UpdateUserCommand): Promise<void> {
    const [user] = await this.userModel.findAll({ id: [id] });
    if (!user.getId) {
      throw new Error('User not found');
    }

    name && (user.setName = name);
    email && (user.setEmail = email);

    return this.userModel.updateOne(user);
  }
  async deleteOne({ id }: DeleteUserCommand): Promise<void> {
    const [user] = await this.userModel.findAll({ id: [id] });
    if (!user.getId) {
      throw new Error('User not found');
    }

    return this.userModel.deleteOne(user);
  }
}
