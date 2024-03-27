import { Type } from '@fily-cloud/common';

export interface RouteTree {
  path: string;
  module?: Type<any>;
  children?: (RouteTree | Type<any>)[];
}

export type Routes = RouteTree[];
