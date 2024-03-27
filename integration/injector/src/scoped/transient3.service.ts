import { Injectable, Scope } from '@fily-cloud/common';
import { TransientService } from './transient.service';

@Injectable({ scope: Scope.TRANSIENT })
export class Transient3Service {
  constructor(public readonly svc: TransientService) {}
}
