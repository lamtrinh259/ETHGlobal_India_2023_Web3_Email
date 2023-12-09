import { Body, Controller, Post } from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service';
import { SendEmailDto } from './dto/email-dto';
import { Result, left, right } from 'src/utils/Result';
import { GenerateEmailIdDto } from './dto/generate-email-id.dto';

@Controller('email-notification')
export class EmailNotificationController {
  constructor(private emailNotificationService: EmailNotificationService) {}
  @Post('send-email')
  async sendEmail(@Body() email: SendEmailDto) {
    try {
      await this.emailNotificationService.sendEmail(email);
      return right(Result.ok<string>('yew')).value;
    } catch (error) {
      return left(error);
    }
  }

  @Post('generate-email-id')
  async generateEmail(@Body() body: GenerateEmailIdDto) {
    try {
      await this.emailNotificationService.generateEmailId(body);
      return right(
        Result.ok<Record<string, string>>({
          email: 'test@example.com',
          passeord: 'test',
        }),
      ).value;
    } catch (error) {
      return left(error);
    }
  }
}
