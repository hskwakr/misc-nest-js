import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'GET users endpoint';
  }

  @Post()
  createUser(@Body() request: any) {
    console.log(request);
    return 'POST users endpoint';
  }
}
