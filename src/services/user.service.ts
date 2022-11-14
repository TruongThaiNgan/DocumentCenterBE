import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService extends PrismaClient {
  getUser() {
    return this.company.count;
  }
}
