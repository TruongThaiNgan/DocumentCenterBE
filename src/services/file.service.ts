import { Injectable } from '@nestjs/common';
import { File, PrismaClient } from '@prisma/client';
import { FileDto } from 'src/dto/file.dto';

@Injectable()
export class FileService extends PrismaClient {
  async getFile(id: string): Promise<File> {
    try {
      const result = await this.file.findFirst({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async createFile(data: FileDto): Promise<File> {
    try {
      const result = await this.file.create({
        data: data,
      });

      return result;
    } catch (error) {
      return error;
    }
  }

  async updateFile(data: FileDto): Promise<File> {
    try {
      const result = await this.file.update({
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

  async deleteFile(id: string): Promise<string> {
    try {
      await this.file.delete({
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
