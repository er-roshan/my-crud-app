import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUsers() {
    return {
      name: 'Roshan',
      company: 'Dreamify IT Solution',
    };
  }

  createUser(req: Request) {
    return req.body;
  }

  getUser(params: { userId: number }) {
    return params;
  }
}
