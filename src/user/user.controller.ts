import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express'
import { User } from 'src/models/users.model';

type userBody = {userName: string, age: number, score: number, pass: string}

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  users: any[] = [];

  @Get('/users')
  getUser() {
    return this.userService.getUsers()
  };

  @Post('/create')
  async createUser(@Body() body: userBody, @Res() res: Response) {
    let userExists = false

    const isUserNameUnique = User.findOne({
      where: { userName: body.userName },
    });

    if (await isUserNameUnique != null) {
      res.send(userExists)
    } else if (await isUserNameUnique == null) {
      userExists = true
      if (body.score > 100) {
        body.score = 100
      }
      this.userService.createUser(body);
      res.send(userExists)
      userExists = false;
      return {message: "Successfully signed up!", body}
    }
  };

  @Post('/signIn')
  async signIn(@Body() body: userBody, @Res() res: Response) {
    if (await this.userService.signIn(body) == false) {
      res.send(false)
    } else {
      res.send(true)
      this.userService.signIn(body)
      return {message: "Successfully logged in!", body}
    }
  }
}
