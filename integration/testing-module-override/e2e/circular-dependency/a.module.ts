import { Injectable, Module, forwardRef } from '@fily-cloud/common';
import { BModule, BProvider } from './b.module';

@Injectable()
export class AProvider {}

@Module({
  imports: [forwardRef(() => BModule)],
  providers: [AProvider],
  exports: [AProvider],
})
export class AModule {}
