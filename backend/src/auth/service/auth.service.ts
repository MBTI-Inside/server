import { Inject, Injectable } from '@nestjs/common';
import { MONGO_USER_MODEL } from 'src/user/db/model/user.model';
import { IUserModel } from 'src/user/db/model/user.model.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(MONGO_USER_MODEL) private readonly userModel: IUserModel
  ) {}
}
