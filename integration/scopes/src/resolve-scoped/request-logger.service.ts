import { Injectable, Scope } from '@fily-cloud/common';
import { LoggerService } from './logger.service';

@Injectable({ scope: Scope.REQUEST })
export class RequestLoggerService {
  constructor(public loggerService: LoggerService) {}
}
