import { Module } from '@fily-cloud/common';
import { ExpressController } from './express.controller';

@Module({
  controllers: [ExpressController],
})
export class ExpressModule {}
