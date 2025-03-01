import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(getUsersDto: GetUsersParamDto, limit: number, page: number) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

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
