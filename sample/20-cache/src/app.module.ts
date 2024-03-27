import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@fily-cloud/common';
import { AppController } from './app.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
})
export class AppModule {}
