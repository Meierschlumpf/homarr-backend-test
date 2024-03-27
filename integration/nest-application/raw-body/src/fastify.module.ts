import { Module } from '@fily-cloud/common';
import { FastifyController } from './fastify.controller';

@Module({
  controllers: [FastifyController],
})
export class FastifyModule {}
