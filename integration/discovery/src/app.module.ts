import { Module } from '@fily-cloud/common';
import { DiscoveryModule } from '@fily-cloud/core';
import { MyWebhookModule } from './my-webhook/my-webhook.module';
import { WebhooksExplorer } from './webhooks.explorer';

@Module({
  imports: [MyWebhookModule, DiscoveryModule],
  providers: [WebhooksExplorer],
})
export class AppModule {}
