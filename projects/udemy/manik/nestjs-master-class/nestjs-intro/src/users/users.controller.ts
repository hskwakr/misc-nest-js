import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'GET users endpoint';
  }

  @Post()
  createUser() {
    return 'POST users endpoint';
  }
}
