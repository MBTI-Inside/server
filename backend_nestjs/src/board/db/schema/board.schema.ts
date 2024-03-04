import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false
})
export class Board {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
export type BoardDocument = HydratedDocument<Board>;
