import { forwardRef, Inject, Injectable } from '@fily-cloud/common';
import { InputService } from './input.service';

@Injectable()
export class CircularService {
  @Inject(forwardRef(() => InputService))
  public readonly service: InputService;
}
