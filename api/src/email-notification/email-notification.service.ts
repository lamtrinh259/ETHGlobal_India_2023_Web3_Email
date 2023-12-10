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
  private ethersUtil: EthersHelper;
  constructor(
    private readonly httpService: HttpService,
    private readonly sendGridService: SendGridService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {
    this.ethersUtil = new EthersHelper();
  }
  async sendEmail(email: Email) {
    if (email.attachments?.length) {
      for (let id = 0; id < email.attachments.length; id++) {
        let element = email.attachments[id];
        element = await uploadAttachmentsToFileCoin(element, email.to);
      }
    }

    const cid = 21313; //await uploadEmailsToFileCoins(
    //   { message: email.message, subject: email.subject },
    //   email.to,
    //   email.from,
    // );
    // //web3 mail sending
    if (email.to.split('@').includes('cipher-inbox.com')) {
      await xmtpUtil(email);
    } else {
      await this.sendGridService.send(email);
    }
    console.log('bc');
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

  getUserByWallet(id) {
    //generate email id and push to blockchain
    return this.userModel
      .find({ publickey: id })
      .select('email, publickey')
      .exec();
  }
  async getMailsByUserEmailOrWallet(email: string) {
    //get all CID from BC
    const cid = 'QmUbtv8pbdShGSgcQd4g6CiDGXz9aMiZVCuVdNBTh9c9Vk';
    const token = await this.httpService.get(
      `https://gateway.lighthouse.storage/ipfs/${cid}`,
    );
    return jwt.verify(token, process.env.JWT_KEY);
  }
}
