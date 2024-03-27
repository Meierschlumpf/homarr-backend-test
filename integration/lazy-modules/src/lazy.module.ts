import { Module, Injectable } from '@fily-cloud/common';
import { GlobalService } from './global.module';

@Injectable()
export class LazyService {
  constructor(public globalService: GlobalService) {}
}

@Module({
  providers: [LazyService],
})
export class LazyModule {}
