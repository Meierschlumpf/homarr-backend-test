import { DiscoveryService } from '@fily-cloud/core';

export const Webhook = DiscoveryService.createDecorator<{ name: string }>();
export const WebhookHandler = DiscoveryService.createDecorator<{
  event: string;
}>();
