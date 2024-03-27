import { Controller, Get, VERSION_NEUTRAL } from '@fily-cloud/common';

@Controller({
  path: 'middleware',
  version: VERSION_NEUTRAL,
})
export class VersionNeutralMiddlewareController {
  @Get('/neutral')
  neutral() {
    return 'Neutral';
  }
}
