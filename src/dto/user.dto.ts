import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class AuthSignInDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class UserDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  companyId: string;
  @ApiProperty()
  role: Role;
}

export type UserLoginDto = {
  id: string;
  email: string;
  name: string;
  companyId: string;
  createAt: Date;
  updateAt: Date;
  roles: {
    id: string;
    name: string;
  }[];
};
