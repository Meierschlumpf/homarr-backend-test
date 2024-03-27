import { Controller, Post, Req, RawBodyRequest } from '@fily-cloud/common';
import { IncomingMessage } from 'http';

@Controller()
export class AppController {
  @Post()
  index(@Req() req: RawBodyRequest<IncomingMessage>) {
    return {
      raw: req.rawBody?.toString(),
    };
  }
}
