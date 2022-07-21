import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser() {
    return 'new user';
  }
  getUser() {
    return ['u', 's', 'e', 'r', 's'];
  }
  deleteUser() {}
}
