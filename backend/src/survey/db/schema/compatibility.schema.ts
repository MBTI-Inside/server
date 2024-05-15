import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CompatibilityType } from 'src/survey/domain/compatibility.domain';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'compatibility'
})
export class CompatibilityEntity {
  @Prop({ required: true })
  type: CompatibilityType;

  @Prop({ required: true })
  mbti: string;

  @Prop({ required: true })
  targetMbti: string;

  @Prop({ required: true })
  description: string;
}

export const CompatibilitySchema =
  SchemaFactory.createForClass(CompatibilityEntity);

export type CompatibilityDocument = HydratedDocument<Document>;
