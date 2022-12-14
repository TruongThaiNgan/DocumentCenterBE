import {
  Body,
  Controller,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('create')
  async signUp(@Body() body) {
    return this.usersService.createUser(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update/:id')
  async updateUser(@Param() param, @Body() body) {
    const id = param.id;
    return this.usersService.updateUser(id, body);
  }
}
