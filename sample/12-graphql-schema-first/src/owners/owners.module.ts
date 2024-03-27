import { Module } from '@fily-cloud/common';
import { OwnersService } from './owners.service';

@Module({
  providers: [OwnersService],
  exports: [OwnersService],
})
export class OwnersModule {}
