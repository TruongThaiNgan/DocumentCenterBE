import { ApiProperty } from '@nestjs/swagger';

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
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
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
