import { Module } from '@fily-cloud/common';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksService],
})
export class TasksModule {}
