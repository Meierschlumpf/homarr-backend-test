import { Injectable, Logger, Scope } from '@fily-cloud/common';

@Injectable({ scope: Scope.TRANSIENT })
export class Transient2Service {
  logger = new Logger();
}
