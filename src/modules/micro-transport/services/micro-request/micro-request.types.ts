import { ETransport } from './micro-request.constants';

export type TMicroRequest = {
  service: ETransport;
  method: string;
  params: Record<string, any>;
};
