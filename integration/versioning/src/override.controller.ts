import { Controller, Get, Version } from '@fily-cloud/common';

@Controller()
export class OverrideController {
  @Version('1')
  @Get('/override')
  overrideV1() {
    return 'Override Version 1';
  }

  @Version('2')
  @Get('/override')
  overrideV2() {
    return 'Override Version 2';
  }
}
