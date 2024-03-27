import { Inject, Injectable } from '@fily-cloud/common';
import { CONTEXT } from '@nestjs/microservices';

@Injectable()
export class NatsService {
  constructor(@Inject(CONTEXT) public ctx) {}
}
