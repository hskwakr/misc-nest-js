import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(typeof id);
    console.log(typeof limit);
    return 'GET users endpoint';
  }

  @Post()
  createUser(@Body() request: any, @Headers() headers: any, @Ip() ip: any) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'POST users endpoint';
  }
}
