import { Body, Controller, Post } from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service';
import { SendEmailDto } from './dto/email-dto';
import { Result, left, right } from 'src/utils/Result';
import { shareFile } from 'src/utils/FileCoinHelper';
import { xmtpUtil } from 'src/utils/XmtpHelper';

@Controller('email-notification')
export class EmailNotificationController {
  constructor(private emailNotificationService: EmailNotificationService) {}
  @Post('send-email')
  async sendEmail(@Body() email: SendEmailDto) {
    try {
      await this.emailNotificationService.sendEmail(email);
      xmtpUtil();
      return right(Result.ok<void>()).value;
    } catch (error) {
      return left(error);
    }
  }
}
