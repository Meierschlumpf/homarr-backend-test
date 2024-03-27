import { Module } from '@fily-cloud/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
})
export class AppModule {}
