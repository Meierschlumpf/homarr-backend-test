import { Injectable } from '@fily-cloud/common';

@Injectable()
export class HostService {
  greeting(): string {
    return 'Host Greeting!';
  }
}
