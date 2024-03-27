import { Module, Injectable } from '@fily-cloud/common';
import { GlobalService } from './global.module';

@Injectable()
export class EagerService {
  constructor(public globalService: GlobalService) {}
}

@Module({
  providers: [EagerService],
})
export class EagerModule {}
