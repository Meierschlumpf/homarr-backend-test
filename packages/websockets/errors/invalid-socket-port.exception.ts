import { RuntimeException } from '@fily-cloud/core/errors/exceptions/runtime.exception';

export class InvalidSocketPortException extends RuntimeException {
  constructor(port: number | string, type: any) {
    super(`Invalid port (${port}) in gateway ${type}`);
  }
}
