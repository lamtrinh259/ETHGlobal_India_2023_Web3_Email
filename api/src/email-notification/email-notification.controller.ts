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
      const bc = new EthersHelper();
      await this.emailNotificationService.sendEmail(email);
      return right(Result.ok<string>('yew'));
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
      return right(Result.ok(result)).value;
    } catch (error) {
      return left(error);
    }
  }

  @Get('get-user-email/:publicKey')
  async getUserEmail(@Param() publicKey: string) {
    try {
      const result =
        await this.emailNotificationService.getUserByWallet(publicKey);
      return right(Result.ok(result)).value;
    } catch (error) {
      return left(error);
    }
  }
}
