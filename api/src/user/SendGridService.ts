import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
const sgMail = require('@sendgrid/mail');
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class SendGridService {
  constructor(private readonly httpService: HttpService) {
    sgMail.setApiKey(
      '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',
    );
  }

  async send(email) {
    try {
      const msg = {
        to: email.to, // Change to your recipient
        from: 'edisonpappi@gmail.com', // Change to your verified sender
        subject: email.subject, // Change to your
        text: 'ETH',
        html: email.message,
      };
      const status = await sgMail.send(msg);
      console.log(status);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
