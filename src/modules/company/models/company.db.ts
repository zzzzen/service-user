import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDbDocument = HydratedDocument<CompanyDb>;

@Schema({
  collection: 'companies',
  versionKey: false,
})
export class CompanyDb {
  @Prop()
  name: string;
}

export const CompanyDbSchema = SchemaFactory.createForClass(CompanyDb);
