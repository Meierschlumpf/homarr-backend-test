import { RuntimeException } from '@fily-cloud/core/errors/exceptions/runtime.exception';

export class InvalidGrpcPackageDefinitionMissingPackageDefinitionException extends RuntimeException {
  constructor() {
    super(
      `Invalid gRPC configuration. protoPath or packageDefinition must be defined.`,
    );
  }
}
