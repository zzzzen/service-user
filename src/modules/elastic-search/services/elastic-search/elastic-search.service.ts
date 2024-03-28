import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { IElasticSearch } from './elastic-search.interface';
import { LoggerService } from '../../../logger/services/loggger/logger.service';

@Injectable()
export class ElasticSearchService implements IElasticSearch {
  readonly client: Client;

  constructor(private logger: LoggerService) {
    this.client = new Client({
      node: 'https://localhost:9200',
      auth: {
        // username: 'dmtrii',
        // password: 'gzu1ght2',
        apiKey: 'TVB1MURZNEJhU20wT0xGT3Z6SlY6U1FaSlZIdkFSWU9tY0hwTnlYQktkUQ==',
      },
      tls: {
        ca: fs.readFileSync('./keys/http_ca.crt'),
        rejectUnauthorized: false,
      },
      requestTimeout: 60000,
    });
    this.health();
  }

  async health() {
    try {
      await this.client.cluster.health();
      return true;
    } catch (e) {
      await this.logger.error(e.message, {
        service: 'ElasticSearchService',
      });
      return false;
    }
  }
}
