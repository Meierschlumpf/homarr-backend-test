import { NestFactory } from '@fily-cloud/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);
  console.log(appService.getHello());
}
bootstrap();
