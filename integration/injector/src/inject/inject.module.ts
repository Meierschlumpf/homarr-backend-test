import { Module } from '@fily-cloud/common';
import { InjectService } from './inject.service';

@Module({
  providers: [InjectService],
})
export class InjectModule {}
