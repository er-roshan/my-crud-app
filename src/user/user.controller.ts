import { UserService } from './user.service';
import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Req() req: Request) {
    return this.userService.createUser(req);
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.userService.getUser(params);
  }

  @Delete()
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
