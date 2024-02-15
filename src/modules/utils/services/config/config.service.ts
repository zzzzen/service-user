import { Injectable } from '@nestjs/common';
import { TConfig } from './config.types';

@Injectable()
export class ConfigService {
  getConfig() {
    return process.env as TConfig;
  }
}
