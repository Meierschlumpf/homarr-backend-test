import { RuntimeException } from '@fily-cloud/core/errors/exceptions/runtime.exception';

/**
 * @publicApi
 */
export class InvalidMessageException extends RuntimeException {
  constructor() {
    super(`The invalid data or message pattern (undefined/null)`);
  }
}
