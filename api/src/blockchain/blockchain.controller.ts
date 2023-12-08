import { Body, Controller, Post } from '@nestjs/common';
import { OnbordDto } from './dto/onbord-dto';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private blockchainService: BlockchainService) {}
  @Post('onbord-user')
  async onbordUser(@Body() onbordDto: OnbordDto): Promise<unknown> {
    return true;
  }
}
