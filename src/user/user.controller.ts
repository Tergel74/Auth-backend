import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/users.model';

type userBody = {userName: string, age: number, score: number, pass: string}

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get('users')
  // getUser(): Promise<User[]> {
  //   return this.userService.getUsers()
  // };

  users: any[] = [];

  @Get('/users')
  getUser() {
    return this.userService.getUsers()
  };

  @Post('/create')
  createUser(@Body() body: userBody) {
    this.userService.createUser(body)
    return {message: "Successfully signed up!", body}
  }
}
