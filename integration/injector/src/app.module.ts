import { Module } from '@fily-cloud/common';
import { ExportsModule } from './exports/exports.module';

@Module({
  imports: [ExportsModule],
})
export class ApplicationModule {}
