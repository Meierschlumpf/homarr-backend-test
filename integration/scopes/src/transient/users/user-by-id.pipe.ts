import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  Scope,
} from '@fily-cloud/common';

@Injectable({ scope: Scope.TRANSIENT })
export class UserByIdPipe implements PipeTransform<string> {
  static COUNTER = 0;
  constructor() {
    UserByIdPipe.COUNTER++;
  }

  transform(value: string, metadata: ArgumentMetadata) {
    return value;
  }
}
