import { forwardRef, Module } from '@fily-cloud/common';
import { CircularService } from './circular.service';
import { InputPropertiesModule } from './input-properties.module';

@Module({
  imports: [forwardRef(() => InputPropertiesModule)],
  providers: [CircularService],
  exports: [CircularService],
})
export class CircularPropertiesModule {}
