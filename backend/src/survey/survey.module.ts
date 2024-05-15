import { Module, Provider } from '@nestjs/common';
import { SurveyController } from './controller/survey.controller';
import { SURVEY_SERVICE, SurveyService } from './service/survey.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyEntity, SurveySchema } from './db/schema/survey.schema';
import { MONGO_ARE_YOU_T_DATABASE } from 'src/config/mongoose.config';
import { MONGO_SURVEY_MODEL, SurveyModel } from './db/model/survey.model';
import {
  SurveyResultEntity,
  SurveyResultSchema
} from './db/schema/survey-result.schema';
import {
  MONGO_SURVEY_RESULT_MODEL,
  SurveyResultModel
} from './db/model/survey-result.model';
import {
  SURVEY_RESULT_SERVICE,
  SurveyResultService
} from './service/survey-result.service';
import {
  CompatibilityEntity,
  CompatibilitySchema
} from './db/schema/compatibility.schema';
import {
  CompatibilityModel,
  MONGO_COMPATIBILITY_MODEL
} from './db/model/compatibility.model';
import {
  COMPATIBILITY_SERVICE,
  CompatibilityService
} from './service/compatibility.service';

const mongooseModule = MongooseModule.forFeature(
  [
    { name: SurveyEntity.name, schema: SurveySchema },
    {
      name: SurveyResultEntity.name,
      schema: SurveyResultSchema
    },
    {
      name: CompatibilityEntity.name,
      schema: CompatibilitySchema
    }
  ],
  MONGO_ARE_YOU_T_DATABASE
);

const services: Provider[] = [
  { provide: SURVEY_SERVICE, useClass: SurveyService },
  { provide: SURVEY_RESULT_SERVICE, useClass: SurveyResultService },
  { provide: COMPATIBILITY_SERVICE, useClass: CompatibilityService }
];

const models: Provider[] = [
  { provide: MONGO_SURVEY_MODEL, useClass: SurveyModel },
  { provide: MONGO_SURVEY_RESULT_MODEL, useClass: SurveyResultModel },
  { provide: MONGO_COMPATIBILITY_MODEL, useClass: CompatibilityModel }
];

@Module({
  imports: [mongooseModule],
  controllers: [SurveyController],
  providers: [...services, ...models]
})
export class SurveyModule {}
