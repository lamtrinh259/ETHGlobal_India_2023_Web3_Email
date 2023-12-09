import { Injectable } from '@nestjs/common';
import {
  Protocols,
  createDecoder,
  createEncoder,
  createLightNode,
} from '@waku/sdk';
import { waitForRemotePeer } from '@waku/sdk';
import protobuf from 'protobufjs';
import { shareToFileCoin } from 'src/utils/ShareToFileCoin';

export interface Email {
  from: string;
  to: string;
  message: string;
  subject: string;
  attachments?: string[];
}

@Injectable()
export class EmailNotificationService {
  constructor() {}
  async sendEmail(email: Email) {
    if (email.attachments) {
      email.attachments.map(async (attachment) => {
        attachment = await shareToFileCoin(attachment, email.to);
      });
    }
  }
}
