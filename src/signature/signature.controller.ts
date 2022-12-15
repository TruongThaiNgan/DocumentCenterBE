import { Body, Controller, Post } from '@nestjs/common';
import { Signature } from '@prisma/client';
import { SignatureService } from './signature.service';

@Controller('signature')
export class SignatureController {
  constructor(private readonly signatureService: SignatureService) {}

  @Post('create')
  async createSignature(): Promise<{ publicKey: string; privateKey: string }> {
    return this.signatureService.createSignature();
  }
}
