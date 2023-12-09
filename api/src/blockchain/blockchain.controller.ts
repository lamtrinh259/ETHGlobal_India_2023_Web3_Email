import { Body, Controller, Post } from '@nestjs/common';
import { OnbordDto } from './dto/onbord-dto';
import { BlockchainService } from './blockchain.service';
import { Result, left, right } from 'src/utils/Result';

@Controller('blockchain')
export class BlockchainController {
  constructor(private blockchainService: BlockchainService) {}
  @Post('onbord-user')
  async onbordUser(@Body() onbord: OnbordDto): Promise<unknown> {
    try {
      const result = await this.blockchainService.onbordUser(onbord);
      return right(Result.ok<void>()).value;
    } catch (error) {
      return left(error);
    }
  }
}
