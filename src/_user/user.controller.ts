import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {

  @Get()
  getUsers() {
    return {
      name: 'Roshan',
      company: 'Dreamify IT Solution',
    };
  }

  @Post()
  createUser(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete()
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}