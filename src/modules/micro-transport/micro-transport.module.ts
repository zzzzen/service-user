import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '../utils/services/config/config.service';
import { MicroRequestService } from './services/micro-request/micro-request.service';
import { ETransport } from './services/micro-request/micro-request.constants';

@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: ETransport.offerService,
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          return {
            transport: Transport.RMQ,
            options: {
              urls: [config.getConfig().RABBIT_URL],
              queue: config.getConfig().RABBIT_QUEUE_OFFER,
              queueOptions: {
                durable: true,
              },
            },
          };
        },
      },
    ]),
  ],
  providers: [MicroRequestService],
  exports: [MicroRequestService],
})
export class MicroTransportModule {}
