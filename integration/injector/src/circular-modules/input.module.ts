import { Module, forwardRef } from '@fily-cloud/common';
import { CircularModule } from './circular.module';
import { InputService } from './input.service';

@Module({
  imports: [forwardRef(() => CircularModule)],
  providers: [InputService],
  exports: [InputService],
})
export class InputModule {}
