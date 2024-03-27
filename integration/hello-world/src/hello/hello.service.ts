import { Injectable } from '@fily-cloud/common';

@Injectable()
export class HelloService {
  greeting(): string {
    return 'Hello world!';
  }
}
