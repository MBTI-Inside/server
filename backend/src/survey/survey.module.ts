import {
  DynamicModule,
  ForwardReference,
  Module,
  Provider,
  Type
} from '@nestjs/common';
import { SurveyController } from './controller/survey.controller';
import { SURVEY_SERVICE, SurveyService } from './service/survey.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyEntity, SurveySchema } from './db/schema/survey.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { MONGO_SURVEY_MODEL, SurveyModel } from './db/model/survey.model';

type ImportType = Array<
  Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
>;

const IMPORTS: ImportType = [
  MongooseModule.forFeature(
    [{ name: SurveyEntity.name, schema: SurveySchema }],
    MONGO_ARE_YOU_T_DATABASE
  )
];

const PROVIDERS: Provider[] = [
  { provide: SURVEY_SERVICE, useClass: SurveyService },
  { provide: MONGO_SURVEY_MODEL, useClass: SurveyModel }
];

@Module({
  imports: [...IMPORTS],
  controllers: [SurveyController],
  providers: [...PROVIDERS]
})
export class SurveyModule {}
