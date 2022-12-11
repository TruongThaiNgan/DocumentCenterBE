import { Company, PrismaClient } from '@prisma/client';
import { CompanyDto, UpdateCompanyDto } from 'src/dto/company.dto';

export class CompanyService extends PrismaClient {
  async getCompany(id: string): Promise<Company> {
    try {
      const result = await this.company.findFirst({ where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }

  async createCompany(data: CompanyDto): Promise<Company> {
    try {
      const result = await this.company.create({
        data: data,
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateCompany(data: UpdateCompanyDto): Promise<Company> {
    try {
      const result = await this.company.update({
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

  async deleteCompany(id: string): Promise<string> {
    try {
      await this.company.delete({
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
