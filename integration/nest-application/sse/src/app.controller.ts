import { Controller, MessageEvent, Sse } from '@fily-cloud/common';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map(_ => ({ data: { hello: 'world' } }) as MessageEvent),
    );
  }
}
