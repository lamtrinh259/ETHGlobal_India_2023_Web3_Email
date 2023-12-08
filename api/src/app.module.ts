import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { EmailNotificationModule } from './email-notification/email-notification.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongo:mongo@eth-india2023.iaackt0.mongodb.net/',
    ),
    BlockchainModule,
    EmailNotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
