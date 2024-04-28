import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IAnswer } from 'src/survey/domain/survey.domain';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'survey'
})
export class SurveyEntity {
  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  answer: IAnswer[];
}

export const SurveySchema = SchemaFactory.createForClass(SurveyEntity);
export type SurveyDocument = HydratedDocument<SurveyEntity>;
