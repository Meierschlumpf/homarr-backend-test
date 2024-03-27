import { Module } from '@fily-cloud/common';
import { DefaultsService } from './defaults.service';

@Module({
  providers: [DefaultsService],
})
export class DefaultsModule {}
