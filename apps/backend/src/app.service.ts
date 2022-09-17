import { Injectable } from '@nestjs/common';
import { prisma } from 'database';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return prisma.user.findMany();
  }
}
