import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDbDocument = HydratedDocument<UserDb>;

@Schema({
  collection: 'users',
  versionKey: false,
})
export class UserDb {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies',
  })
  company: string;
}

export const UserDbSchema = SchemaFactory.createForClass(UserDb);
