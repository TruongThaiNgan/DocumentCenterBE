import { PrismaClient, Document } from '@prisma/client';
import { DocDto, DocDto1 } from 'src/dto/document.dto';

export class DocService extends PrismaClient {
  async getUser(id: string): Promise<Document> {
    try {
      const result = await this.document.findFirst({ where: { id: id } });
      return result;
    } catch (error) {
      return error;
    }
  }

  async createUser(data: DocDto): Promise<Document> {
    try {
      const result = await this.document.create({
        data: data,
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateCompany(data: DocDto1): Promise<Document> {
    try {
      const result = await this.document.update({
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
      await this.document.delete({
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
