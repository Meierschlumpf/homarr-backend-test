import { Controller, Get } from '@fily-cloud/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return 'Hello, world!';
  }
}
