import { Injectable } from '@fily-cloud/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world!';
  }
}
