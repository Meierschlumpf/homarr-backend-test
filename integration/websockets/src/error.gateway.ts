import {
  SubscribeMessage,
  WebSocketGateway,
  WsException,
} from '@fily-cloud/websockets';
import { throwError } from 'rxjs';

@WebSocketGateway(8080)
export class ErrorGateway {
  @SubscribeMessage('push')
  onPush(client, data) {
    return throwError(() => new WsException('test'));
  }
}
