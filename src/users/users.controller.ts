import { Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUser();
  }

  @Post()
  createUser() {
    return this.userService.createUser();
  }

  @Delete()
  deleteUser() {
    return this.userService.deleteUser();
  }
}
