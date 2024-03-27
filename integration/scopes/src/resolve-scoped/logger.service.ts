import { Inject, Injectable, Scope } from '@fily-cloud/common';
import { LOGGER_PROVIDER } from './logger.provider';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService {
  constructor(@Inject(LOGGER_PROVIDER) public logger) {}
}
