import { PrismaClient, User } from '@prisma/client';
import { UserDto } from 'src/dto/user.dto';

export class UserService extends PrismaClient {
  async getUser(id: string): Promise<User> {
    try {
      const result = await this.user.findFirst({ where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }

  async createUser(data: UserDto): Promise<User> {
    try {
      const result = await this.user.create({
        data: data,
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateUser(data: UserDto): Promise<User> {
    try {
      const result = await this.user.update({
        data: data,
        where: {
          id: data.id,
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      await this.user.delete({
        where: {
          id: id,
        },
      });
      return 'Success';
    } catch (error) {
      return error;
    }
  }

  async getUsersByCompanyId(id: string): Promise<Array<User>> {
    try {
      const result = await this.user.findMany({
        where: {
          companyId: id,
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }
}
