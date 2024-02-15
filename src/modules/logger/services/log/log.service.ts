import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../../utils/services/config/config.service';
import moment from 'moment/moment';
import { TLog, TLogParams } from './log.types';

@Injectable()
export class LogService {
  constructor(private readonly configService: ConfigService) {}

  info(params: TLogParams) {
    this.addLog({ ...params, context: 'INFO', type: 'log' });
  }

  fail(params: TLogParams) {
    this.addLog({ ...params, context: 'ERROR', type: 'error' });
  }

  warning(params: TLogParams) {
    this.addLog({ ...params, context: 'WARNING', type: 'warn' });
  }

  private async addLog(params: TLog) {
    const { message, context, type, service } = params;

    const text = `[ ${context} ][ ${moment().format('DD.MM.YYYY HH:mm')} ][ ${this.configService.getConfig().SERVICE_NAME} ][ ${service} ][ ${message} ]`;

    console[type].apply(this, [text, this.colors.reset]);
  }

  private readonly colors = {
    reset: '\x1b[0m',
    log: '\x1b[32m',
    error: '\x1b[31m',
    warn: '\x1b[33m',
  };
}
