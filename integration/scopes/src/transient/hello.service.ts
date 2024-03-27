import { Inject, Injectable, Scope } from '@fily-cloud/common';

@Injectable({ scope: Scope.REQUEST })
export class HelloService {
  constructor(@Inject('META') private readonly meta) {}

  greeting(): string {
    return 'Hello world!';
  }
}
