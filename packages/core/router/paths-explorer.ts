import {
  METHOD_METADATA,
  PATH_METADATA,
  VERSION_METADATA,
} from '@fily-cloud/common/constants';
import { RequestMethod } from '@fily-cloud/common/enums';
import { Controller } from '@fily-cloud/common/interfaces/controllers/controller.interface';
import { VersionValue } from '@fily-cloud/common/interfaces/version-options.interface';
import {
  addLeadingSlash,
  isString,
  isUndefined,
} from '@fily-cloud/common/utils/shared.utils';
import { MetadataScanner } from '../metadata-scanner';
import { RouterProxyCallback } from './router-proxy';

export interface RouteDefinition {
  path: string[];
  requestMethod: RequestMethod;
  targetCallback: RouterProxyCallback;
  methodName: string;
  version?: VersionValue;
}

export class PathsExplorer {
  constructor(private readonly metadataScanner: MetadataScanner) {}

  public scanForPaths(
    instance: Controller,
    prototype?: object,
  ): RouteDefinition[] {
    const instancePrototype = isUndefined(prototype)
      ? Object.getPrototypeOf(instance)
      : prototype;

    return this.metadataScanner
      .getAllMethodNames(instancePrototype)
      .reduce((acc, method) => {
        const route = this.exploreMethodMetadata(
          instance,
          instancePrototype,
          method,
        );

        if (route) {
          acc.push(route);
        }

        return acc;
      }, []);
  }

  public exploreMethodMetadata(
    instance: Controller,
    prototype: object,
    methodName: string,
  ): RouteDefinition | null {
    const instanceCallback = instance[methodName];
    const prototypeCallback = prototype[methodName];
    const routePath = Reflect.getMetadata(PATH_METADATA, prototypeCallback);
    if (isUndefined(routePath)) {
      return null;
    }
    const requestMethod: RequestMethod = Reflect.getMetadata(
      METHOD_METADATA,
      prototypeCallback,
    );
    const version: VersionValue | undefined = Reflect.getMetadata(
      VERSION_METADATA,
      prototypeCallback,
    );
    const path = isString(routePath)
      ? [addLeadingSlash(routePath)]
      : routePath.map((p: string) => addLeadingSlash(p));

    return {
      path,
      requestMethod,
      targetCallback: instanceCallback,
      methodName,
      version,
    };
  }
}
