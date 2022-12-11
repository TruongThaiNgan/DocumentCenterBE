import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AppService } from '../services/app.service';
import Constants from '../constants';
import { AuthSignInDto, UserLoginDto } from 'src/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sign-in')
  async signIn(
    @Body()
    data: AuthSignInDto,
  ): Promise<UserLoginDto> {
    if (data.password != undefined && data.username != undefined) {
      return this.appService.signIn(data);
    } else {
      throw new BadRequestException(Constants.notEnoughParameter);
    }
  }
}
