import { Injectable } from '@nestjs/common';

export interface Onbord {
  ens: string;
  gmail: string;
}
@Injectable()
export class BlockchainService {
  async onbordUser(onbord: Onbord): Promise<unknown> {
    return true;
  }
}
