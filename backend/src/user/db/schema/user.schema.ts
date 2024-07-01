import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserPlatform } from 'src/user/service/type/type';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'user'
})
export class UserEntity {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: UserPlatform })
  platform: UserPlatform;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
export type UserDocument = HydratedDocument<UserEntity>;
