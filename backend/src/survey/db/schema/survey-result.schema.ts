import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class ResultsEntity {
  @Prop({ required: true })
  surveyId: string;

  @Prop({ required: true })
  answer: string;

  @Prop({ required: true })
  proportion: number;

  @Prop({ required: true })
  select: string;

  @Prop({ required: true })
  type: string;
}

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'survey_result'
})
export class SurveyResultEntity {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  results: ResultsEntity[];

  @Prop({ required: true })
  finalType: string;

  @Prop({ required: true })
  finalTypeProportion: number;
}

export const SurveyResultSchema =
  SchemaFactory.createForClass(SurveyResultEntity);
export type SurveyResultDocument = HydratedDocument<Document>;
