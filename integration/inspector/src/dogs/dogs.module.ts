import { Module } from '@fily-cloud/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
