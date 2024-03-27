import { Module } from '@fily-cloud/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, CatsModule],
})
export class AppModule {}
