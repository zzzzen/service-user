import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OfferInput {
  @Field()
  _id: string;
}
