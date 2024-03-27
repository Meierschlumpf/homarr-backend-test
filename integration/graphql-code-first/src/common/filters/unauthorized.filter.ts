import {
  ArgumentsHost,
  Catch,
  UnauthorizedException,
} from '@fily-cloud/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(UnauthorizedException)
export class UnauthorizedFilter implements GqlExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    return new Error('Unauthorized error');
  }
}
