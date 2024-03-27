import { Module } from '@fily-cloud/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CatsModule, CoreModule],
})
export class AppModule {}
