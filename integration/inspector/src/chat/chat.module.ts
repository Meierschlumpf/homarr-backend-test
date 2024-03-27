import { Module } from '@fily-cloud/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
