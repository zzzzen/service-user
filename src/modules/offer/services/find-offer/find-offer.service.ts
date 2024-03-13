import { Injectable } from '@nestjs/common';
import { FindOfferRepository } from './find-offer.repository';
import { IFindOfferService, TFindOfferReq } from './find-offer.interface';

@Injectable()
export class FindOfferService implements IFindOfferService {
  constructor(private repository: FindOfferRepository) {}

  async find(req: TFindOfferReq) {
    return this.repository.find(req);
  }
}
