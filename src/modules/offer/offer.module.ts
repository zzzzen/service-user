import { Global, Module } from '@nestjs/common';
import { OfferResolver } from './offer.resolver';
import { CreateOfferService } from './services/create-offer/create-offer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferDb, OfferDbSchema } from './models/offer.db';
import { CreateOfferRepository } from './services/create-offer/create-offer.repository';
import { FindOneOfferService } from './services/find-one-offer/find-one-offer.service';
import { FindOneOfferRepository } from './services/find-one-offer/find-one-offer.repository';
import { FindOfferService } from './services/find-offer/find-offer.service';
import { FindOfferRepository } from './services/find-offer/find-offer.repository';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: OfferDb.name, schema: OfferDbSchema }]),
  ],
  exports: [CreateOfferService, FindOneOfferService, FindOfferService],
  providers: [
    OfferResolver,
    CreateOfferService,
    CreateOfferRepository,
    FindOneOfferService,
    FindOneOfferRepository,
    FindOfferService,
    FindOfferRepository,
  ],
})
export class OfferModule {}
