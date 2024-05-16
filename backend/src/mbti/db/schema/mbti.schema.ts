import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'mbti'
})
export class MbtiEntity {
  @Prop({ required: true })
  mbti: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  count: number;

  @Prop({ required: true })
  tags: string[];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  goodCompatibilityId: string;

  @Prop({ required: true })
  badCompatibilityId: string;
}

export const MbtiSchema = SchemaFactory.createForClass(MbtiEntity);
export type MbtiDocument = HydratedDocument<Document>;
