import { Injectable } from '@fily-cloud/common';

@Injectable()
export class AppService {
  getHello() {
    return { hello: 'world' };
  }
}
