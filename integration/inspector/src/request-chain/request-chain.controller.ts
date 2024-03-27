import { Controller, Get, UseInterceptors } from '@fily-cloud/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { RequestChainService } from './request-chain.service';

@Controller('hello')
export class RequestChainController {
  constructor(private readonly chainService: RequestChainService) {}

  @UseInterceptors(LoggingInterceptor)
  @Get()
  greeting(): void {
    this.chainService.call();
  }
}
