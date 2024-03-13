import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OfferDbDocument = HydratedDocument<OfferDb>;

@Schema({
  collection: 'offers',
  versionKey: false,
})
export class OfferDb {
  @Prop()
  name: string;

  @Prop()
  start: number;

  @Prop()
  end: number;

  @Prop()
  category: string;

  @Prop()
  price: number;
}

export const OfferDbSchema = SchemaFactory.createForClass(OfferDb);
