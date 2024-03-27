import { Module } from '@fily-cloud/common';
import { HelperService } from './helper.service';

@Module({
  providers: [HelperService],
  exports: [HelperService],
})
export class HelperModule {}
