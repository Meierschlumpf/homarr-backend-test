import { MiddlewareConsumer, Module, NestModule } from '@fily-cloud/common';
import { APP_INTERCEPTOR } from '@fily-cloud/core';
import { CatsController } from '../cats/cats.controller';
import { LoggerMiddleware } from '../common/middleware/logger.middleware';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
