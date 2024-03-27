import { SubscribeMessage, WebSocketGateway } from '@fily-cloud/websockets';

@WebSocketGateway({
  path: '/ws-path',
})
export class WsPathGateway {
  @SubscribeMessage('push')
  onPush(client, data) {
    return {
      event: 'pop',
      data,
    };
  }
}
