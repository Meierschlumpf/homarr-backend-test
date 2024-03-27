import { Module, Scope } from '@fily-cloud/common';

@Module({
  providers: [
    {
      provide: 'MULTI_PROVIDER',
      useValue: 'A',
    },
    {
      provide: 'REQ_SCOPED_MULTI_PROVIDER',
      useFactory: () => 'A',
      scope: Scope.REQUEST,
    },
  ],
})
export class AModule {}
