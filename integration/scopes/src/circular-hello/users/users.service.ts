import { Inject, Injectable, Scope } from '@fily-cloud/common';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  static COUNTER = 0;
  constructor(@Inject('META') private readonly meta) {
    UsersService.COUNTER++;
  }

  findById(id: string) {
    return { id };
  }
}
