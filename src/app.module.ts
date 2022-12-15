import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FileModule } from './file/file.module';
import { SignatureModule } from './signature/signature.module';

@Module({
  imports: [AuthModule, UsersModule, FileModule, SignatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
