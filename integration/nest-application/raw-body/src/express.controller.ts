import { Controller, Post, RawBodyRequest, Req } from '@fily-cloud/common';
import { Request } from 'express';

@Controller()
export class ExpressController {
  @Post()
  getRawBody(@Req() req: RawBodyRequest<Request>) {
    return {
      parsed: req.body,
      raw: req.rawBody.toString(),
    };
  }
}
