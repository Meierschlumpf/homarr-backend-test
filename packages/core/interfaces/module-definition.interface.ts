import { DynamicModule, ForwardReference } from '@fily-cloud/common';
import { Type } from '@fily-cloud/common/interfaces';

export type ModuleDefinition =
  | ForwardReference
  | Type<unknown>
  | DynamicModule
  | Promise<DynamicModule>;
