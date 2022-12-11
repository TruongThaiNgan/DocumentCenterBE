import { PrismaClient, Role } from '@prisma/client';
import { RoleByCompanyIdDto, RoleDto } from 'src/dto/role.dto';

export class RoleService extends PrismaClient {
  async getRoleByCompanyId(id: string): Promise<Array<RoleByCompanyIdDto>> {
    try {
      const result = await this.role.findMany({
        where: { companyId: id },
        include: {
          UserOnRoles: {
            include: {
              user: true,
            },
          },
        },
      });

      const data = result.map((data) => {
        return {
          id: data.id,
          name: data.name,
          createAt: data.createAt,
          amount: data.UserOnRoles.length,
        };
      });

      return data;
    } catch (error) {
      return error;
    }
  }

  async createRole(data: RoleDto): Promise<Role> {
    try {
      const result = await this.role.create({
        data: data,
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateRole(data: RoleDto): Promise<Role> {
    try {
      const result = await this.role.update({
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

  async deleteRole(id: string): Promise<string> {
    try {
      await this.role.delete({
        where: {
          id: id,
        },
      });
      return 'Success';
    } catch (error) {
      return error;
    }
  }
}
