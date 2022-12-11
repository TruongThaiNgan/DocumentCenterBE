import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
}

export class UpdateCompanyDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
}
