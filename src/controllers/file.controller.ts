import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from 'src/services/file.service';
import { File } from '@prisma/client';

@Controller('/file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':id')
  async getFile(@Param() params): Promise<File> {
    return this.fileService.getFile(params.id);
  }
}
