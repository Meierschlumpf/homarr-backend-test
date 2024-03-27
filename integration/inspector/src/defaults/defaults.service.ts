import { Inject, Injectable, Optional } from '@fily-cloud/common';
import { CoreService } from './core.service';

@Injectable()
export class DefaultsService {
  constructor(
    @Inject(CoreService)
    @Optional()
    public readonly coreService = { default: true },
  ) {}
}
