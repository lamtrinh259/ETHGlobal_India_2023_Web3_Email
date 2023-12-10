import { Module } from '@nestjs/common';
import { EmailNotificationController } from './email-notification.controller';
import { EmailNotificationService } from './email-notification.service';
import { HttpModule } from '@nestjs/axios';
import { SendGridService } from 'src/user/SendGridService';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/entities/User.entities';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [EmailNotificationController],
  providers: [EmailNotificationService, SendGridService],
})
export class EmailNotificationModule {}
