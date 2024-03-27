import { Module } from '@fily-cloud/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
