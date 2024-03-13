import { OfferDbDocument } from '../../models/offer.db';

export interface IFindOfferService {
  find: (req: TFindOfferReq) => Promise<TFindOfferRes>;
}

export interface IFindOfferRepository {
  find: (req: TFindOfferReq) => Promise<TFindOfferRes>;
}

export type TFindOfferReq = {
  name?: string;
  skip?: number;
  limit?: number;
};

export type TFindOfferRes = {
  count: number;
  items: OfferDbDocument[];
};
