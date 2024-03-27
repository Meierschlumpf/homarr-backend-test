import { Injectable } from '@fily-cloud/common';

@Injectable()
export class UsersRepository {
  async find() {
    return [{ id: 1, email: 'test@nestjs.com' }];
  }
}
