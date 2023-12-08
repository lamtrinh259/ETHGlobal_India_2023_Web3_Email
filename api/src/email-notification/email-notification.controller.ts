import { Body, Controller, Post } from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service';
import { SendEmailDto } from './dto/email-dto';

@Controller('email-notification')
export class EmailNotificationController {
  constructor(private emailNotificationService: EmailNotificationService) {}
  @Post('send-email')
  async sendEmail(@Body() body: SendEmailDto) {
    return await this.emailNotificationService.sendEmail(body);
  }
}
