import { Module } from '@fily-cloud/common';
import { DatabaseModule } from './database.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [DatabaseModule.forRoot(), PhotoModule],
})
export class AsyncApplicationModule {}
