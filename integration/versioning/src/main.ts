import { VersioningType } from '@fily-cloud/common';
import { NestFactory } from '@fily-cloud/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.MEDIA_TYPE,
    key: 'v=',
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
