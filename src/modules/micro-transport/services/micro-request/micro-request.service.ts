import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TMicroRequest } from './micro-request.types';
import { ETransport } from './micro-request.constants';
import { LogService } from '../../../logger/services/log/log.service';

@Injectable()
export class MicroRequestService {
  constructor(
    @Inject(ETransport.offerService)
    private readonly offerService: ClientProxy,
    private readonly logger: LogService,
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
      this.logger.fail({
        message: JSON.stringify(err, null, 1),
        service: `microtransport - ${service} - ${method}`,
      });
      result.error = err;
    }
    return result;
  }
}
