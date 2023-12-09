import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';
import * as dotenv from 'dotenv';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './user/user.module';
dotenv.config();

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(process.env.MONGO_URL, { dbName: 'ETH-INDIA2023' }),
    BlockchainModule,
    EmailNotificationModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
