import { RuntimeException } from '@fily-cloud/core/errors/exceptions/runtime.exception';

/**
 * @publicApi
 */
export class InvalidKafkaClientTopicException extends RuntimeException {
  constructor(topic?: string) {
    super(
      `The client consumer did not subscribe to the corresponding reply topic (${topic}).`,
    );
  }
}
