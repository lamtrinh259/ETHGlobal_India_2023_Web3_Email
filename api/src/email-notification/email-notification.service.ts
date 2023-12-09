import { Injectable } from '@nestjs/common';
import {
  Protocols,
  createDecoder,
  createEncoder,
  createLightNode,
} from '@waku/sdk';
import { waitForRemotePeer } from '@waku/sdk';
import protobuf from 'protobufjs';
import { shareToFileCoin } from 'src/utils/FileCoinUtils';
import { xmtpUtil } from 'src/utils/XmtpHelper';
export interface Email {
  from: string;
  to: string;
  message: string;
  subject: string;
  attachments?: unknown[];
}

@Injectable()
export class EmailNotificationService {
  constructor() {}
  async sendEmail(email: Email) {
    if (email.attachments?.length) {
      for (let id = 0; id < email.attachments.length; id++) {
        let element = email.attachments[id];
        element = await shareToFileCoin(element, [email.to]);
      }
    }
    await xmtpUtil(email);
    return;
  }
  generateEmailId(id) {
    //generate email id and push to blockchain
    return true;
  }
}
