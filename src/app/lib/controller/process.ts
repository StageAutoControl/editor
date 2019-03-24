export interface ProcessStatus {
  name: string;
  running: boolean;
  verbose: boolean;
  startedAt?: string;
  stoppedAt?: string;
  error?: string;
  logs?: Log[];
}

export interface Log {
  time: string;
  level: string;
  message: string;
}
