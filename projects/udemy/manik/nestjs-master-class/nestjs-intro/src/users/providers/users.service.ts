import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(getUsersDto: GetUsersParamDto, limit: number, page: number) {
    return [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        name: 'Alice',
        email: 'alice@example.com',
      },
    ];
  }

  /*
   * Find a user by id
   */
  public findById(id: string) {
    return {
      id: 1234,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
