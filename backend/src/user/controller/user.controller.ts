import { Controller, Inject } from '@nestjs/common';
import { USER_SERVICE } from '../service/user.service';
import { IUserService } from '../service/user.service.interface';

@Controller()
export class UserController {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService
  ) {}
}
