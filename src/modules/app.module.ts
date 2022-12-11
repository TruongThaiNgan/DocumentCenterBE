import { Module } from '@nestjs/common';
import { RoleController } from 'src/controllers/role.controller';
import { RoleService } from 'src/services/role.service';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController, RoleController],
  providers: [AppService, RoleService],
})
export class AppModule {}
