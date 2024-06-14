import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from './db/schema/user.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { USER_SERVICE, UserService } from './service/user.service';
import { MONGO_USER_MODEL, UserModel } from './db/model/user.model';

const mongooseModule = MongooseModule.forFeature(
  [{ name: UserEntity.name, schema: UserSchema }],
  MONGO_ARE_YOU_T_DATABASE
);

const services: Provider[] = [{ provide: USER_SERVICE, useClass: UserService }];

const models: Provider[] = [{ provide: MONGO_USER_MODEL, useClass: UserModel }];

@Module({
  imports: [mongooseModule],
  controllers: [],
  providers: [...services, ...models],
  exports: [...models]
})
export class UserModule {}
