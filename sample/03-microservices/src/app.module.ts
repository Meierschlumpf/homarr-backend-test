import { Module } from '@fily-cloud/common';
import { MathModule } from './math/math.module';

@Module({
  imports: [MathModule],
})
export class AppModule {}
