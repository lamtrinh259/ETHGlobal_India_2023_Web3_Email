import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
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
  constructor(private readonly httpService: HttpService) {
    this.ethersUtil = new EthersHelper();
  }
  async sendEmail(email: Email) {
    if (email.attachments?.length) {
      for (let id = 0; id < email.attachments.length; id++) {
        let element = email.attachments[id];
        element = await uploadAttachmentsToFileCoin(element, email.to);
      }
    }
    console.log(email.subject);
    const cid = await uploadEmailsToFileCoins(
      { message: email.message, subject: email.subject },
      email.to,
      email.from,
    );
    //web3 mail sending
    if (email.to.split('@').includes('cipher-inbox.com')) {
      await xmtpUtil(email);
    } else {
      //web 2 mail sending
    }
    await this.ethersUtil.triggerNewEmailEvent(email.to, cid);
    // to fetch from and to wllet detaild from DB
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
