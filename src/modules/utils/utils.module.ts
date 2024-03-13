import { Global, Module } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';
import { UtilsService } from './services/utils/utils.service';

@Global()
@Module({
  providers: [ConfigService, UtilsService],
  exports: [ConfigService, UtilsService],
})
export class UtilsModule {}
