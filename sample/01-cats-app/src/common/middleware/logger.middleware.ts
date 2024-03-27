import { Injectable, NestMiddleware } from '@fily-cloud/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Request...`);
    next();
  }
}
