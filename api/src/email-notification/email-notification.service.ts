import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
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
  constructor(private readonly httpService: HttpService) {}
  async sendEmail(email: Email) {
    if (email.attachments?.length) {
      for (let id = 0; id < email.attachments.length; id++) {
        let element = email.attachments[id];
        element = await uploadAttachmentsToFileCoin(element, email.to);
      }
    }
    await xmtpUtil(email);
    // to fetch from and to wllet detaild from DB
    await uploadEmailsToFileCoins(
      { message: email.message, subject: email.subject },
      email.to,
      email.from,
    );
    return;
  }
  generateEmailId(id) {
    //generate email id and push to blockchain
    return true;
  }

  getUserByWallet(id) {
    //generate email id and push to blockchain
    return { email: 'test@gmail.com' };
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
