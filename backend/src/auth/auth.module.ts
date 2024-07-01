import { Module, Provider } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AUTH_SERVICE, AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';

const services: Provider[] = [{ provide: AUTH_SERVICE, useClass: AuthService }];

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [...services]
})
export class AuthModule {}
