import { Module } from '@fily-cloud/common';
import { HelperModule } from './helper/helper.module';
import { RequestChainController } from './request-chain.controller';
import { RequestChainService } from './request-chain.service';

@Module({
  imports: [HelperModule],
  providers: [RequestChainService],
  controllers: [RequestChainController],
})
export class RequestChainModule {}
