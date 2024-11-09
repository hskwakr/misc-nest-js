import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id);
    console.log(id);
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
