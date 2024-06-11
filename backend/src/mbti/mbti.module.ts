import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MbtiEntity, MbtiSchema } from './db/schema/mbti.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { MbtiModel, MONGO_MBTI_MODEL } from './db/model/mbti.model';
import { MBTI_SERVICE, MbtiService } from './service/mbti.service';

const mongooseModule = MongooseModule.forFeature(
  [{ name: MbtiEntity.name, schema: MbtiSchema }],
  MONGO_ARE_YOU_T_DATABASE
);

const services: Provider[] = [
  {
    provide: MBTI_SERVICE,
    useClass: MbtiService
  }
];

const models: Provider[] = [{ provide: MONGO_MBTI_MODEL, useClass: MbtiModel }];

@Module({
  imports: [mongooseModule],
  controllers: [],
  providers: [...services, ...models]
})
export class MbtiModule {}
