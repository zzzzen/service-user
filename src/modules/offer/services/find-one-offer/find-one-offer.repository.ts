import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OfferDb } from '../../models/offer.db';
import { FilterQuery, Model, ProjectionType, QueryOptions } from 'mongoose';

@Injectable()
export class FindOneOfferRepository {
  constructor(@InjectModel(OfferDb.name) private offerModel: Model<OfferDb>) {}

  async findOne(
    filter: FilterQuery<OfferDb>,
    projection?: ProjectionType<OfferDb>,
    options?: QueryOptions,
  ) {
    return this.offerModel.findOne(filter, projection, options);
  }
}
