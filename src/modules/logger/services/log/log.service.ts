import { Injectable, LoggerService } from '@nestjs/common';
import * as moment from 'moment';
import { TLog, TLogParams } from './log.types';

@Injectable()
export class LogService implements LoggerService {
  async log(message: string, params?: TLogParams) {
    await this.addLog({ ...params, context: 'info', type: 'log', message });
  }

  async error(message: string, params?: TLogParams) {
    await this.addLog({ ...params, context: 'error', type: 'error', message });
  }

  async warn(message: string, params?: TLogParams) {
    await this.addLog({ ...params, context: 'warning', type: 'warn', message });
  }

  private async addLog(params: TLog) {
    const { message, context, type, service } = params;

    const text = `[ ${context} ][ ${moment().format('DD.MM.YYYY HH:mm')} ][ ${process.env.SERVICE_NAME} ][ ${service || 'UnknownService'} ][ ${message} ]`;

    console[type](text);
  }
}
