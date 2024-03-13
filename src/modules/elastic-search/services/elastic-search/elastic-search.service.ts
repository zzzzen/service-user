import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { LogService } from '../../../logger/services/log/log.service';

@Injectable()
export class ElasticSearchService {
  readonly client: Client;

  constructor(private logger: LogService) {
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
