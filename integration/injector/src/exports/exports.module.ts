import { Module } from '@fily-cloud/common';
import { ExportsService } from './exports.service';

@Module({
  exports: [ExportsService],
})
export class ExportsModule {}
