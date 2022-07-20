import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/users.model';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  getUser(): Promise<User[]> {
    return this.userService.getUsers()
  };
}
