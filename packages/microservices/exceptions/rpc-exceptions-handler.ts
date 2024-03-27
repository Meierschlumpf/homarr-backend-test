import { isEmpty } from '@fily-cloud/common/utils/shared.utils';
import { Observable } from 'rxjs';
import { ArgumentsHost } from '@fily-cloud/common/interfaces/features/arguments-host.interface';
import { RpcExceptionFilterMetadata } from '@fily-cloud/common/interfaces/exceptions';
import { selectExceptionFilterMetadata } from '@fily-cloud/common/utils/select-exception-filter-metadata.util';
import { InvalidExceptionFilterException } from '@nestjs/core/errors/exceptions/invalid-exception-filter.exception';
import { RpcException } from './rpc-exception';
import { BaseRpcExceptionFilter } from './base-rpc-exception-filter';

/**
 * @publicApi
 */
export class RpcExceptionsHandler extends BaseRpcExceptionFilter {
  private filters: RpcExceptionFilterMetadata[] = [];

  public handle(
    exception: Error | RpcException | any,
    host: ArgumentsHost,
  ): Observable<any> {
    const filterResult$ = this.invokeCustomFilters(exception, host);
    if (filterResult$) {
      return filterResult$;
    }
    return super.catch(exception, host);
  }

  public setCustomFilters(filters: RpcExceptionFilterMetadata[]) {
    if (!Array.isArray(filters)) {
      throw new InvalidExceptionFilterException();
    }
    this.filters = filters;
  }

  public invokeCustomFilters<T = any>(
    exception: T,
    host: ArgumentsHost,
  ): Observable<any> | null {
    if (isEmpty(this.filters)) {
      return null;
    }

    const filter = selectExceptionFilterMetadata(this.filters, exception);
    return filter ? filter.func(exception, host) : null;
  }
}
