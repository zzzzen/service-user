import { Field, InputType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { IsMongoId } from 'class-validator';

@InputType()
@Exclude()
export class OfferInput {
  @Field()
  @IsMongoId()
  _id: string;
}
