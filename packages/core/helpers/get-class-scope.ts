import { Scope } from '@fily-cloud/common';
import { SCOPE_OPTIONS_METADATA } from '@fily-cloud/common/constants';
import { Type } from '@fily-cloud/common/interfaces/type.interface';

export function getClassScope(provider: Type<unknown>): Scope {
  const metadata = Reflect.getMetadata(SCOPE_OPTIONS_METADATA, provider);
  return metadata && metadata.scope;
}
