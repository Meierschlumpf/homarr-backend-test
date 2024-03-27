import { Injectable } from '@fily-cloud/common';

@Injectable()
export class UsersService {
  findById(id: string) {
    return { id };
  }
}
