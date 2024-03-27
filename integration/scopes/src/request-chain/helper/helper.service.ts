import { Inject, Injectable, Scope } from '@fily-cloud/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class HelperService {
  constructor(@Inject(REQUEST) public readonly request) {}

  public noop() {}
}
