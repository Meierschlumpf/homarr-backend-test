import { Module } from '@fily-cloud/common';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [HelloModule.forRoot({ provide: 'META', useValue: true })],
})
export class ApplicationModule {}
