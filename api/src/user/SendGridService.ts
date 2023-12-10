import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
const sgMail = require('@sendgrid/mail');
import * as dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
@Injectable()
export class SendGridService {
  constructor(private readonly httpService: HttpService) {}

  async send(email) {
    try {
      const msg = {
        to: email.to, // Change to your recipient
        from: email.from, // Change to your verified sender
        subject: email.subject, // Change to your
        text: 'ETH',
        html: email.message,
      };
      await sgMail.send(msg);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
