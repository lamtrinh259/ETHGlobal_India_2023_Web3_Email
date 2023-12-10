import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/entities/User.entities';
import { SendGridService } from 'src/user/SendGridService';
import EthersHelper from 'src/utils/EthersUtils';
import {
  uploadAttachmentsToFileCoin,
  uploadEmailsToFileCoins,
} from 'src/utils/FileCoinUtils';
import { xmtpUtil } from 'src/utils/XmtpHelper';
const jwt = require('jsonwebtoken');
export interface Email {
  from: string;
  to: string;
  message: string;
  subject: string;
  attachments?: unknown[];
}

@Injectable()
export class EmailNotificationService {
  constructor(
    private readonly httpService: HttpService,
    private readonly sendGridService: SendGridService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async sendEmail(email: Email) {
    if (email.attachments?.length) {
      for (let id = 0; id < email.attachments.length; id++) {
        let element = email.attachments[id];
        element = await uploadAttachmentsToFileCoin(element, email.to);
      }
    }

    return await uploadEmailsToFileCoins(JSON.stringify(email));

    // //web3 mail sending
    // if (email.to.split('@').includes('cipher-inbox.com')) {
    // } else {
    //   await this.sendGridService.send(email);
    // }
    // console.log('bc');
    // await this.ethersUtil.triggerNewEmailEvent(email.to, cid);
    // to fetch from and to wllet detaild from DB
  }
  async generateEmailId(domain, key) {
    const createdCat = new this.userModel({
      email: `${domain}@cipher-inbox.com`,
      publickey: key,
    });
    await createdCat.save();
    return {
      email: `${domain}@cipher-inbox.com`,
      publickey: key,
    };
  }

  async getUserByWallet(id) {
    //generate email id and push to blockchain
    return await this.userModel
      .findOne(
        { publickey: id },
        {
          email: 1,
          publickey: 1,
        },
      )
      .exec();
  }
  async getMailsByUserEmailOrWallet(cid: string) {
    const token = await this.httpService.get(
      `https://gateway.lighthouse.storage/ipfs/${cid}`,
    );
    return jwt.verify(token, process.env.JWT_KEY);
  }
}
