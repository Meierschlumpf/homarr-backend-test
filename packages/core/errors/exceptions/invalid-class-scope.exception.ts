import { Abstract, Type } from '@fily-cloud/common/interfaces';
import { isFunction } from '@fily-cloud/common/utils/shared.utils';
import { INVALID_CLASS_SCOPE_MESSAGE } from '../messages';
import { RuntimeException } from './runtime.exception';

export class InvalidClassScopeException extends RuntimeException {
  constructor(metatypeOrToken: Type<any> | Abstract<any> | string | symbol) {
    let name = isFunction(metatypeOrToken)
      ? (metatypeOrToken as Function).name
      : metatypeOrToken;
    name = name && name.toString();

    super(INVALID_CLASS_SCOPE_MESSAGE`${name}`);
  }
}
