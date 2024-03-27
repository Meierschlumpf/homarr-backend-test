/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConsoleLogger } from '@fily-cloud/common';

/**
 * @publicApi
 */
export class TestingLogger extends ConsoleLogger {
  constructor() {
    super('Testing');
  }

  log(message: string) {}
  warn(message: string) {}
  debug(message: string) {}
  verbose(message: string) {}
  error(message: string, ...optionalParams: any[]) {
    return super.error(message, ...optionalParams);
  }
}
