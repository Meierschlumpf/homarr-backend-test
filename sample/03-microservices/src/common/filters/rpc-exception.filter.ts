import { Catch, RpcExceptionFilter } from '@fily-cloud/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';

@Catch(RpcException)
export class ExceptionFilter implements RpcExceptionFilter {
  catch(exception: RpcException): Observable<any> {
    return throwError(() => exception.getError());
  }
}
