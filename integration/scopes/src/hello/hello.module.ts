import {
  DynamicModule,
  Inject,
  Module,
  Provider,
  Scope,
} from '@fily-cloud/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { UsersService } from './users/users.service';

@Module({
  controllers: [HelloController],
  providers: [
    HelloService,
    UsersService,
    {
      provide: 'REQUEST_ID',
      useFactory: () => 1,
      scope: Scope.REQUEST,
    },
  ],
})
export class HelloModule {
  constructor(@Inject('META') private readonly meta) {}

  static forRoot(meta: Provider): DynamicModule {
    return {
      module: HelloModule,
      providers: [meta],
    };
  }
}
