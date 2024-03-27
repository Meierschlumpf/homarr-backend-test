import { SubscribeMessage, WebSocketGateway } from '@fily-cloud/websockets';

@WebSocketGateway({
  path: '/ws-path',
})
export class WsPathGateway2 {
  @SubscribeMessage('push')
  onPush(client, data) {
    return {
      event: 'pop',
      data,
    };
  }
}
