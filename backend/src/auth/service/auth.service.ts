import { Inject, Injectable } from '@nestjs/common';
import { MONGO_USER_MODEL } from 'src/user/db/model/user.model';
import { IUserModel } from 'src/user/db/model/user.model.interface';
import { IAuthService } from './auth.service.interface';
import { SiginInCommand } from './command/sigin-in.command';

export const AUTH_SERVICE = 'AUTH_SERVICE';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(MONGO_USER_MODEL) private readonly userModel: IUserModel
  ) {}

  async signIn({ username, password, platform }: SiginInCommand) {}
}
