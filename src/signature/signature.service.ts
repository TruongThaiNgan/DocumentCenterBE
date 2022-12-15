import { Body, Injectable } from '@nestjs/common';
import { PrismaClient, Signature } from '@prisma/client';
import {
  generateKeyPairSync,
  createPrivateKey,
  createSign,
  createPublicKey,
  createVerify,
} from 'crypto';

@Injectable()
export class SignatureService extends PrismaClient {
  async createSignature(): Promise<{ publicKey: string; privateKey: string }> {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'der',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'der',
      },
    });
    return {
      publicKey: publicKey.toString('base64'),
      privateKey: privateKey.toString('base64'),
    };
  }

  async sign(data) {
    const { publicKey, privateKey } = await this.createSignature();

    const privateKeyNew = createPrivateKey({
      key: Buffer.from(privateKey, 'base64'),
      type: 'pkcs8',
      format: 'der',
    });

    const sign = createSign('SHA256');
    sign.update(data);
    sign.end();

    const signature = sign.sign(privateKeyNew).toString('base64');

    return { signature, data };
  }

  async verify(req) {
    const { data, publicKey, signature } = req;

    const publicKeyNew = createPublicKey({
      key: Buffer.from(publicKey, 'base64'),
      type: 'spki',
      format: 'der',
    });

    const verify = createVerify('SHA256');

    verify.update(data);
    verify.end();

    const result = verify.verify(
      publicKeyNew,
      Buffer.from(signature, 'base64'),
    );

    return result;
  }
}
