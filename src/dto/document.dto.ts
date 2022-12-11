import { ApiProperty } from '@nestjs/swagger';
export class DocDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  role: string[];
  @ApiProperty()
  companyId: string;
}

export class DocDto1 {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  role: string[];
}
