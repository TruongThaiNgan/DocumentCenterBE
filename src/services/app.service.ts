import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ApiUnauthorizedResponse } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
import { AuthSignInDto, UserLoginDto } from 'src/dto/user.dto';

@Injectable()
export class AppService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log('onModuleInit');
    await this.$connect();
  }

  getHello(): string {
    return 'Hello word';
  }

  async signIn(data: AuthSignInDto): Promise<UserLoginDto> {
    try {
      const result = await this.user.findFirstOrThrow({
        where: {
          username: data.username,
        },
        include: {
          UserOnRoles: {
            include: {
              role: true,
            },
          },
        },
      });

      if (result.password === data.password) {
        return {
          id: result.id,
          name: result.name,
          createAt: result.createAt,
          updateAt: result.updateAt,
          email: result.email,
          companyId: result.companyId,
          roles: result.UserOnRoles.map((roles) => ({
            id: roles.roleId,
            name: roles.role.name,
          })),
        };
      } else {
        throw ApiUnauthorizedResponse();
      }
    } catch (error) {
      return error;
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
