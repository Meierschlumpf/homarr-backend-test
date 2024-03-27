import { Controller, Get, VERSION_NEUTRAL } from '@fily-cloud/common';

@Controller({
  version: VERSION_NEUTRAL,
})
export class VersionNeutralController {
  @Get('/neutral')
  neutral() {
    return 'Neutral';
  }
}
