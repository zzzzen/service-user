import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { ILogger, TLog, TLoggerParams } from './logger.interface';

@Injectable()
export class LoggerService implements ILogger {
  async log(message: string, params?: TLoggerParams) {
    await this.addLog({ ...params, context: 'info', type: 'log', message });
  }

  async error(message: string, params?: TLoggerParams) {
    await this.addLog({ ...params, context: 'error', type: 'error', message });
  }

  async warn(message: string, params?: TLoggerParams) {
    await this.addLog({ ...params, context: 'warning', type: 'warn', message });
  }

  private async addLog(params: TLog) {
    const { message, context, type, service } = params;

    const text = `[ ${context} ][ ${moment().format('DD.MM.YYYY HH:mm')} ][ ${process.env.SERVICE_NAME} ][ ${service || 'UnknownService'} ][ ${message} ]`;

    console[type](text);
  }
}
