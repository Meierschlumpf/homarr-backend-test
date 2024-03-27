import { Controller, Get } from '@fily-cloud/common';

@Controller()
export class AppController {
  @Get()
  getGlobals() {
    return '';
  }
}
