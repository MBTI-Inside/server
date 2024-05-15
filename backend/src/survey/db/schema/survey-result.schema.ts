import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  IAwareness,
  IEnergy,
  IJudgement,
  ILife
} from 'src/survey/domain/survey-result.domain';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'survey_result'
})
export class SurveyResultEntity {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  mbti: string;

  @Prop({ required: true })
  tags: string[];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  goodCompatibilityId: string;

  @Prop({ required: true })
  badCompatibilityId: string;

  @Prop({ required: true })
  energy: IEnergy[];

  @Prop({ required: true })
  awareness: IAwareness[];

  @Prop({ required: true })
  judgement: IJudgement[];

  @Prop({ required: true })
  life: ILife[];
}

export const SurveyResultSchema =
  SchemaFactory.createForClass(SurveyResultEntity);
export type SurveyResultDocument = HydratedDocument<Document>;
