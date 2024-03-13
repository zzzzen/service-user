import { Field, ObjectType } from '@nestjs/graphql';
import { OfferGql } from '../models/offer.gql';

@ObjectType({ description: 'OffersOutput' })
export class OffersOutput {
  @Field(() => [OfferGql])
  items: OfferGql;

  @Field(() => Number)
  count: number;
}
