export type TLogParams = {
  service: string;
  message: string;
};

export type TLog = TLogParams & {
  context: 'INFO' | 'ERROR' | 'WARNING' | 'DEBUG';
  type: 'log' | 'error' | 'warn';
};