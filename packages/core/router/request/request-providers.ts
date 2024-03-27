import { Provider, Scope } from '@fily-cloud/common';
import { REQUEST } from './request-constants';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
export const requestProvider: Provider = {
  provide: REQUEST,
  scope: Scope.REQUEST,
  useFactory: noop,
};
