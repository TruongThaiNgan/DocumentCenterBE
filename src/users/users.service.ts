import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { UpdateUserDto, UserDto } from './users.dto';

@Injectable()
export class UsersService extends PrismaClient {
  async findOne(username: string): Promise<User> {
    return this.user.findFirstOrThrow({
      where: {
        username: username,
      },
    });
  }

  async createUser(data: UpdateUserDto): Promise<User> {
    try {
      const count = await this.user.count({
        where: {
          username: data.username,
        },
      });

      if (count > 0) {
        throw BadRequestException;
      }

      const result = await this.user.create({
        data: data,
      });

      return result;
    } catch (error) {
      return error;
    }
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    try {
      const result = await this.user.update({
        data: {
          ...data,
          id: id,
        },
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }
}
