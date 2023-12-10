import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service';
import { SendEmailDto } from './dto/email-dto';
import { Result, left, right } from 'src/utils/Result';
import { GenerateEmailIdDto } from './dto/generate-email-id.dto';
import { uploadEmailsToFileCoins } from 'src/utils/FileCoinUtils';
import EthersHelper from 'src/utils/EthersUtils';

@Controller('email-notification')
export class EmailNotificationController {
  constructor(private emailNotificationService: EmailNotificationService) {}
  @Post('send-email')
  async sendEmail(@Body() email: SendEmailDto) {
    try {
      const result = await this.emailNotificationService.sendEmail(email);
      return right(result);
    } catch (error) {
      console.log(error);
      return left(Result.fail(error));
    }
  }

  @Post('generate-email-id')
  async generateEmail(@Body() body: GenerateEmailIdDto) {
    try {
      const { username, publickey } = body;
      const result = await this.emailNotificationService.generateEmailId(
        username,
        publickey,
      );
      return right(result);
    } catch (error) {
      return left(error);
    }
  }

  @Get('get-user-email/:key')
  async getUserEmail(@Param() key: string) {
    try {
      const result = await this.emailNotificationService.getUserByWallet(key);
      return right(result);
    } catch (error) {
      return left(error);
    }
  }

  @Get('get-message/:cid')
  async getDataForm(@Param() cid: string) {
    try {
      const result =
        await this.emailNotificationService.getMailsByUserEmailOrWallet(cid);
      return right(result);
    } catch (error) {
      return left(error);
    }
  }
}
