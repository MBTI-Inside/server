import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'memo'
})
export class MemoEntity {
  @Prop()
  parentMemoId: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  likeCount: number;
}

export const MemoSchema = SchemaFactory.createForClass(MemoEntity);
export type MemoDocument = HydratedDocument<MemoEntity>;
