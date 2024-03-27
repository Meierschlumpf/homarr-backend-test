import { Module } from '@fily-cloud/common';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
})
export class AppModule {}
