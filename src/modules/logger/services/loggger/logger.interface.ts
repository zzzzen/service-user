import { LoggerService } from '@nestjs/common';

export interface ILogger extends LoggerService {
  log: (message: string, params?: TLoggerParams) => Promise<void>;
  error: (message: string, params?: TLoggerParams) => Promise<void>;
  warn: (message: string, params?: TLoggerParams) => Promise<void>;
}

export type TLoggerParams = {
  service: string;
};

export type TLog = {
  message: string;
  service: string;
  context: 'info' | 'error' | 'warning';
  type: 'log' | 'error' | 'warn';
};
