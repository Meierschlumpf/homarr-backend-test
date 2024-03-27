import { Inject, Injectable, Scope } from '@fily-cloud/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class DurableService {
  public instanceCounter = 0;

  constructor(@Inject(REQUEST) public readonly requestPayload: unknown) {}

  greeting() {
    ++this.instanceCounter;
    return `Hello world! Counter: ${this.instanceCounter}`;
  }
}
