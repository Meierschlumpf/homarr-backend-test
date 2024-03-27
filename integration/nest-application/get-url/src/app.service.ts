import { Injectable } from '@fily-cloud/common';

@Injectable()
export class AppService {
  sayHello(): string {
    return 'Hello World!';
  }
}
