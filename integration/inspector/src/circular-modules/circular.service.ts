import { Injectable, forwardRef, Inject } from '@fily-cloud/common';
import { InputService } from './input.service';

@Injectable()
export class CircularService {
  constructor(
    @Inject(forwardRef(() => InputService))
    public readonly service: InputService,
  ) {}
}
