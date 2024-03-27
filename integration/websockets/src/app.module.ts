import { Module } from '@fily-cloud/common';
import { ApplicationGateway } from './app.gateway';

@Module({
  providers: [ApplicationGateway],
})
export class ApplicationModule {}
