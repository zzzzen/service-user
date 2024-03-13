import { Injectable } from '@nestjs/common';
import { CreateOfferRepository } from './create-offer.repository';
import { OfferDb } from '../../models/offer.db';

@Injectable()
export class CreateOfferService {
  constructor(private offerCreateRepository: CreateOfferRepository) {}

  async create(data: OfferDb | OfferDb[]) {
    return this.offerCreateRepository.create(data);
  }
}
