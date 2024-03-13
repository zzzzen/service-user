export type TLogParams = {
  service: string;
};

export type TLog = {
  message: string;
  service: string;
  context: 'info' | 'error' | 'warning';
  type: 'log' | 'error' | 'warn';
};
