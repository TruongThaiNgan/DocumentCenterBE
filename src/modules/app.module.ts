import { Module } from '@nestjs/common';
import { RoleController } from 'src/controllers/role.controller';
import { UserController } from 'src/controllers/user.controller';
import { RoleService } from 'src/services/role.service';
import { UserService } from 'src/services/user.service';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController, RoleController, UserController],
  providers: [AppService, RoleService, UserService],
})
export class AppModule {}
