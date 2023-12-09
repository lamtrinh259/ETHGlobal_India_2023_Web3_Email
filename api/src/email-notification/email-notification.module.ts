import { Module } from '@nestjs/common';
import { EmailNotificationController } from './email-notification.controller';
import { EmailNotificationService } from './email-notification.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EmailNotificationController],
  providers: [EmailNotificationService],
})
export class EmailNotificationModule {}
