import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    BlockchainModule,
    EmailNotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
