import { Injectable, Inject, forwardRef } from '@fily-cloud/common';
import { CircularService } from './circular.service';

@Injectable()
export class InputService {
  constructor(
    @Inject(forwardRef(() => CircularService))
    public readonly service: CircularService,
  ) {}
}
