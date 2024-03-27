import { Module } from '@fily-cloud/common';
import { APP_GUARD } from '@fily-cloud/core';
import { DurableController } from './durable.controller';
import { DurableGuard } from './durable.guard';
import { DurableService } from './durable.service';

@Module({
  controllers: [DurableController],
  providers: [
    DurableService,
    {
      provide: APP_GUARD,
      useClass: DurableGuard,
    },
  ],
})
export class DurableModule {}
