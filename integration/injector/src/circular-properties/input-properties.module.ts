import { forwardRef, Module } from '@fily-cloud/common';
import { CircularPropertiesModule } from './circular-properties.module';
import { InputService } from './input.service';

@Module({
  imports: [forwardRef(() => CircularPropertiesModule)],
  providers: [InputService],
  exports: [InputService],
})
export class InputPropertiesModule {}
