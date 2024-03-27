import { Module, Scope } from '@fily-cloud/common';

@Module({
  providers: [
    {
      provide: 'MULTI_PROVIDER',
      useValue: 'C',
    },
    {
      provide: 'REQ_SCOPED_MULTI_PROVIDER',
      useFactory: () => 'C',
      scope: Scope.REQUEST,
    },
  ],
})
export class CModule {}
