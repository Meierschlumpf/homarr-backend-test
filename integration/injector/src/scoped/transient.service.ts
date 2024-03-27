import { Injectable, Scope } from '@fily-cloud/common';
import { Transient2Service } from './transient2.service';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  constructor(public readonly svc: Transient2Service) {}
}
