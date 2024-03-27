import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, UseInterceptors } from '@fily-cloud/common';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  @Get()
  findAll() {
    return [{ id: 1, name: 'Nest' }];
  }
}
