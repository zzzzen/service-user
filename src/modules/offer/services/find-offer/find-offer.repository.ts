import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ElasticSearchService } from '../../../elastic-search/services/elastic-search/elastic-search.service';
import { LoggerService } from '../../../logger/services/loggger/logger.service';
import { OfferDb } from '../../models/offer.db';
import { IFindOfferRepository, TFindOfferReq } from './find-offer.interface';
import { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types';

@Injectable()
export class FindOfferRepository implements IFindOfferRepository {
  private readonly index = 'offers-search';

  constructor(
    @InjectModel(OfferDb.name) private offerModel: Model<OfferDb>,
    private elastic: ElasticSearchService,
    private logger: LoggerService,
  ) {
    this.init();
  }

  async find({ name, skip, limit }: TFindOfferReq) {
    const resp = await this.elastic.client.search({
      index: this.index,
      size: limit,
      from: skip,
      query: {
        bool: {
          should: [
            {
              match: {
                name,
              },
            },
            {
              wildcard: {
                name: `*${name}*`,
              },
            },
            {
              fuzzy: {
                name: {
                  value: name,
                },
              },
            },
          ],
          minimum_should_match: 1,
        },
      },
    });
    return {
      count: (resp.hits.total as SearchTotalHits).value,
      items: resp.hits.hits.map((hit) => {
        return { _id: hit._id, ...(hit._source as any) };
      }),
    };
  }

  @Cron('30 * * * * *')
  private async bulk() {
    const offers = await this.offerModel.find(
      { price: { $in: [5696] } },
      {
        _id: { $toString: '$_id' },
        name: 1,
        price: 1,
        end: 1,
        category: 1,
        start: 1,
      },
      { lean: true },
    );

    const operations = offers.flatMap(({ _id, ...offer }) => [
      { index: { _index: this.index, _id } },
      offer,
    ]);

    const bulkResponse = await this.elastic.client.bulk({
      refresh: true,
      operations,
    });

    if (bulkResponse.errors) {
      const erroredDocuments = [];
      bulkResponse.items.forEach((action, i) => {
        const operation = Object.keys(action)[0];
        if (action[operation].error) {
          erroredDocuments.push({
            status: action[operation].status,
            error: action[operation].error,
            operation: operations[i * 2],
            document: operations[i * 2 + 1],
          });
        }
      });
      this.logger.error('Unable to bulk offers', {
        service: 'FindOfferRepository',
      });
    }
  }

  private async init() {
    try {
      const isExists = await this.elastic.client.indices.exists({
        index: this.index,
      });
      if (!isExists) {
        await this.elastic.client.indices.create({
          index: this.index,
          mappings: {
            properties: {
              name: { type: 'text' },
              start: { type: 'long' },
              end: { type: 'long' },
              category: { type: 'text' },
              price: { type: 'float' },
            },
          },
        });
      }
    } catch (e) {
      await this.logger.error(e.message, { service: 'OfferElastic' });
    }
  }
}
