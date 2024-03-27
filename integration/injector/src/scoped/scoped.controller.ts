import { Controller, Scope } from '@fily-cloud/common';

@Controller({
  path: 'test',
  scope: Scope.REQUEST,
})
export class ScopedController {}
