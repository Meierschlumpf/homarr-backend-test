import { Module } from '@fily-cloud/common';
import { DependencyService } from './dependency.service';
import { PropertiesService, SYMBOL_TOKEN } from './properties.service';

@Module({
  providers: [
    DependencyService,
    PropertiesService,
    {
      provide: 'token',
      useValue: true,
    },
    {
      provide: SYMBOL_TOKEN,
      useValue: true,
    },
  ],
})
export class PropertiesModule {}
