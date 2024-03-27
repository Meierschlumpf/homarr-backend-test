import { Inject, Injectable, Logger, Scope } from '@fily-cloud/common';
import { INQUIRER } from '@fily-cloud/core';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientLogger {
  @Inject(INQUIRER) inquirer: any = null;
  config: object;

  constructor(
    @Inject(INQUIRER) private readonly inquirerInCtor,
    private readonly logger: Logger,
  ) {
    this.config =
      (inquirerInCtor.constructor && inquirerInCtor.constructor.logger) || {};
  }

  log(message: string) {
    this.logger.log({ message, ...this.config });
  }
}
