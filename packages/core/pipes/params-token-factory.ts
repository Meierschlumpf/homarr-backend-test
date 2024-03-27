import { Paramtype } from '@fily-cloud/common';
import { RouteParamtypes } from '@fily-cloud/common/enums/route-paramtypes.enum';

export class ParamsTokenFactory {
  public exchangeEnumForString(type: RouteParamtypes): Paramtype {
    switch (type) {
      case RouteParamtypes.BODY:
        return 'body';
      case RouteParamtypes.PARAM:
        return 'param';
      case RouteParamtypes.QUERY:
        return 'query';
      default:
        return 'custom';
    }
  }
}
