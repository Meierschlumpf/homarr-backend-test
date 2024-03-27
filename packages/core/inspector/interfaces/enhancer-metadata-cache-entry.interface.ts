import { Type } from '@fily-cloud/common';
import { EnhancerSubtype } from '@fily-cloud/common/constants';
import { InstanceWrapper } from '../../injector/instance-wrapper';

export interface EnhancerMetadataCacheEntry {
  targetNodeId?: string;
  moduleToken: string;
  classRef: Type;
  methodKey: string | undefined;
  enhancerRef?: unknown;
  enhancerInstanceWrapper?: InstanceWrapper;
  subtype: EnhancerSubtype;
}
