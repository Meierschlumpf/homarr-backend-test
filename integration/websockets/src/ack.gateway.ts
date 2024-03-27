import { SubscribeMessage, WebSocketGateway } from '@fily-cloud/websockets';

@WebSocketGateway(8080)
export class AckGateway {
  @SubscribeMessage('push')
  onPush() {
    return 'pong';
  }
}
