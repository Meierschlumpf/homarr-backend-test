import { Module } from '@fily-cloud/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MATH_SERVICE } from './math.constants';
import { MathController } from './math.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: MATH_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [MathController],
})
export class MathModule {}
