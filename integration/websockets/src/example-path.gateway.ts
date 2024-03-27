import { SubscribeMessage, WebSocketGateway } from '@fily-cloud/websockets';

@WebSocketGateway({
  path: '/example',
})
export class ExamplePathGateway {
  @SubscribeMessage('push')
  onPush(client, data) {
    return {
      event: 'pop',
      data,
    };
  }
}
