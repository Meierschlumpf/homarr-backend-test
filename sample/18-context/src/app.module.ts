import { Module } from '@fily-cloud/common';
import { AppService } from './app.service';

@Module({
  providers: [AppService],
})
export class AppModule {}
