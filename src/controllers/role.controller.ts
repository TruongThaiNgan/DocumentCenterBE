import { Controller, Get, Param } from '@nestjs/common';
import { RoleService } from 'src/services/role.service';
import { RoleByCompanyIdDto } from 'src/dto/role.dto';

@Controller('/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get(':id')
  async getRole(@Param() params): Promise<Array<RoleByCompanyIdDto>> {
    return this.roleService.getRoleByCompanyId(params.id);
  }
}
