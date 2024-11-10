import {
  Body,
  Controller,
  DefaultValuePipe,
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
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(typeof id);
    console.log(id);
    console.log(typeof limit);
    console.log(limit);
    console.log(typeof page);
    console.log(page);
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
