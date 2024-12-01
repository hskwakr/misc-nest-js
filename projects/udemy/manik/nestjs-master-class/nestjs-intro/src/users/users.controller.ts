import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUsersParamDto);
    console.log(typeof limit);
    console.log(limit);
    console.log(typeof page);
    console.log(page);
    return 'GET users endpoint';
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log(createUserDto instanceof CreateUserDto);
    return 'POST users endpoint';
  }
}
