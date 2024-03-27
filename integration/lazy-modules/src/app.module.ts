import { Module } from '@fily-cloud/common';
import { LazyModuleLoader } from '@fily-cloud/core';
import { EagerModule } from './eager.module';
import { GlobalModule } from './global.module';
import { LazyModule } from './lazy.module';

@Module({
  imports: [GlobalModule, EagerModule],
})
export class AppModule {
  constructor(public loader: LazyModuleLoader) {}

  async onApplicationBootstrap() {
    await this.loader.load(() => LazyModule);
  }
}
