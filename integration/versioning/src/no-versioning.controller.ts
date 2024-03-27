import { Controller, Get } from '@fily-cloud/common';

@Controller('foo')
export class NoVersioningController {
  @Get('/bar')
  helloFoo() {
    return 'Hello FooBar!';
  }
}
