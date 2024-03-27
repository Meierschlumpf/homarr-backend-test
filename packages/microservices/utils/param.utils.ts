import { PipeTransform, Type } from '@fily-cloud/common';
import { assignMetadata } from '@fily-cloud/common/decorators/http/route-params.decorator';
import { isNil, isString } from '@fily-cloud/common/utils/shared.utils';
import 'reflect-metadata';
import { PARAM_ARGS_METADATA } from '../constants';
import { RpcParamtype } from '../enums/rpc-paramtype.enum';

export function createRpcParamDecorator(
  paramtype: RpcParamtype,
): (...pipes: (Type<PipeTransform> | PipeTransform)[]) => ParameterDecorator {
  return (...pipes: (Type<PipeTransform> | PipeTransform)[]) =>
    (target, key, index) => {
      const args =
        Reflect.getMetadata(PARAM_ARGS_METADATA, target.constructor, key) || {};
      Reflect.defineMetadata(
        PARAM_ARGS_METADATA,
        assignMetadata(args, paramtype, index, undefined, ...pipes),
        target.constructor,
        key,
      );
    };
}

export const createPipesRpcParamDecorator =
  (paramtype: RpcParamtype) =>
  (
    data?: any,
    ...pipes: (Type<PipeTransform> | PipeTransform)[]
  ): ParameterDecorator =>
  (target, key, index) => {
    const args =
      Reflect.getMetadata(PARAM_ARGS_METADATA, target.constructor, key) || {};

    const hasParamData = isNil(data) || isString(data);
    const paramData = hasParamData ? data : undefined;
    const paramPipes = hasParamData ? pipes : [data, ...pipes];

    Reflect.defineMetadata(
      PARAM_ARGS_METADATA,
      assignMetadata(args, paramtype, index, paramData, ...paramPipes),
      target.constructor,
      key,
    );
  };
