import { Global, Module } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class UtilsModule {}
