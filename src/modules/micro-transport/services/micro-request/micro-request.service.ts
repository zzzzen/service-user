import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TMicroRequest } from './micro-request.types';
import { ETransport } from './micro-request.constants';
import { LoggerService } from '../../../logger/services/loggger/logger.service';

@Injectable()
export class MicroRequestService {
  constructor(
    @Inject(ETransport.offerService)
    private readonly offerService: ClientProxy,
    private readonly logger: LoggerService,
  ) {}

  async request<R = any>({ service, method, params }: TMicroRequest) {
    const result: { error: Error | null; data: R | null } = {
      error: null,
      data: null,
    };
    try {
      const response = await this[service].send(method, params).toPromise();
      result.data = response.data;
    } catch (err) {
      this.logger.error(JSON.stringify(err, null, 1), {
        service: `microtransport - ${service} - ${method}`,
      });
      result.error = err;
    }
    return result;
  }
}
