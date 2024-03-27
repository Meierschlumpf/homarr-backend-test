import { Inject, Injectable, Scope } from '@fily-cloud/common';
import { INQUIRER } from '@fily-cloud/core';
import { RequestLogger } from './request-logger.service';

@Injectable({ scope: Scope.REQUEST })
export class HelloRequestService {
  static logger = { feature: 'request' };

  constructor(
    private readonly logger: RequestLogger,
    @Inject(INQUIRER) private readonly inquirer,
  ) {}

  greeting() {
    this.logger.log('Hello request!');
  }

  farewell() {
    this.logger.log('Goodbye request!');
  }
}
