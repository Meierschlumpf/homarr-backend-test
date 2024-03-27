import { Module } from '@fily-cloud/common';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule],
})
export class AppModule {}
