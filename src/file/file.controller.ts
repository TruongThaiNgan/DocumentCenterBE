import { Controller, Get, Param, Post } from '@nestjs/common';
import { File } from '@prisma/client';
import { FileService } from './file.service';

@Controller('/file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':id')
  async getFile(@Param() params): Promise<File> {
    return this.fileService.getFile(params.id);
  }

  @Get('user/:id')
  async getFilesById(@Param() params): Promise<Array<File>> {
    return this.fileService.getFilesById(params.id);
  }

  @Post('create')
  async createFile(@Param() params): Promise<File> {
    return this.fileService.createFile(params);
  }
}
