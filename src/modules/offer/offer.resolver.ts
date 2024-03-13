import { Args, Query, Resolver } from '@nestjs/graphql';
import { OfferGql } from './models/offer.gql';
import { CreateOfferService } from './services/create-offer/create-offer.service';
import { FindOneOfferService } from './services/find-one-offer/find-one-offer.service';
import { UseGuards } from '@nestjs/common';
import { AuthJwtGuard } from '../auth/auth-jwt.guard';
import { OfferInput } from './dto/offer.input';
import { FindOfferService } from './services/find-offer/find-offer.service';
import { OffersInput } from './dto/offers.input';
import { OffersOutput } from './dto/offers.output';

@Resolver(() => OfferGql)
export class OfferResolver {
  constructor(
    private offerCreateService: CreateOfferService,
    private findOneOfferService: FindOneOfferService,
    private findService: FindOfferService,
  ) {}

  @UseGuards(AuthJwtGuard)
  @Query(() => OfferGql)
  async offer(@Args('data') data: OfferInput) {
    return this.findOneOfferService.findOne(data);
  }

  @UseGuards(AuthJwtGuard)
  @Query(() => OffersOutput)
  async offers(@Args('data') data: OffersInput) {
    const resp = await this.findService.find(data);
    console.log(resp);
    return resp;
  }
}
