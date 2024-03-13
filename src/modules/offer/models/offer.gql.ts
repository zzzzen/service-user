import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'OfferGql ' })
export class OfferGql {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  start: string;

  @Field(() => Number)
  end: string;

  @Field(() => String)
  category: string;

  @Field(() => Number)
  price: number;
}
