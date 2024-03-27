import { ArgumentsHost, Catch, ExceptionFilter } from '@fily-cloud/common';
import { WsException } from '@fily-cloud/websockets';

@Catch(WsException)
export class RequestFilter implements ExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost) {
    const wsCtx = host.switchToWs();
    const pattern = wsCtx.getPattern();
    const client = wsCtx.getClient();
    client.emit('exception', { pattern, message: exception.message });
  }
}
