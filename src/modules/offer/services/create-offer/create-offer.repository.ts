import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OfferDb } from '../../models/offer.db';

@Injectable()
export class CreateOfferRepository {
  constructor(@InjectModel(OfferDb.name) private offerModel: Model<OfferDb>) {}

  async create(offer: OfferDb | OfferDb[]) {
    return this.offerModel.create(offer);
  }
}
