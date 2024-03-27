import { Injectable } from '@fily-cloud/common';

@Injectable()
export class FooService {
  foo() {
    console.log('foo called');
  }
}
