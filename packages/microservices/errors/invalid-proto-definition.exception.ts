import { RuntimeException } from '@fily-cloud/core/errors/exceptions/runtime.exception';

/**
 * @publicApi
 */
export class InvalidProtoDefinitionException extends RuntimeException {
  constructor(path: string) {
    super(`The invalid .proto definition (file at "${path}" not found)`);
  }
}
