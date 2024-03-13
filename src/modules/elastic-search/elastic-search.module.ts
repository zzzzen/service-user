import { Global, Module } from '@nestjs/common';
import { ElasticSearchService } from './services/elastic-search/elastic-search.service';

@Global()
@Module({
  providers: [ElasticSearchService],
  exports: [ElasticSearchService],
})
export class ElasticSearchModule {}
