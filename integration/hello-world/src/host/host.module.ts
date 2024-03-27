import { Module } from '@fily-cloud/common';
import { HostController } from './host.controller';
import { HostService } from './host.service';
import { UsersService } from './users/users.service';

@Module({
  controllers: [HostController],
  providers: [HostService, UsersService],
})
export class HostModule {}
