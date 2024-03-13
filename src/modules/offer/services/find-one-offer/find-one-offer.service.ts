import { Injectable } from '@nestjs/common';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import { OfferDb } from '../../models/offer.db';
import { FindOneOfferRepository } from './find-one-offer.repository';

@Injectable()
export class FindOneOfferService {
  constructor(private repository: FindOneOfferRepository) {}

  async findOne(
    filter: FilterQuery<OfferDb>,
    projection?: ProjectionType<OfferDb>,
    options?: QueryOptions,
  ) {
    const offer = await this.repository.findOne(filter, projection, options);
    return offer.toObject();
  }
}
