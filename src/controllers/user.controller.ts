import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { User } from '@prisma/client';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('company/:id')
  async getUserByCompanyId(@Param() params): Promise<Array<User>> {
    return this.userService.getUsersByCompanyId(params.id);
  }
}
