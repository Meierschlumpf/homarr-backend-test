import {
  BadRequestException,
  Controller,
  Get,
  Header,
} from '@fily-cloud/common';

@Controller()
export class ErrorsController {
  @Get('sync')
  synchronous() {
    this.throwError();
  }

  @Get('async')
  async asynchronous() {
    this.throwError();
  }

  @Get('unexpected-error')
  @Header('Content-Type', 'application/pdf')
  unexpectedError() {
    throw new Error();
  }

  throwError() {
    throw new BadRequestException({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Integration test',
    });
  }
}
