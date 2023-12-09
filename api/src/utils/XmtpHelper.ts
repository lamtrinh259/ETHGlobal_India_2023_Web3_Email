//Import libraries
import { Client } from '@xmtp/xmtp-js';
import { Wallet } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

export const xmtpUtil = async () => {
  const wallet = new Wallet(process.env.METAMASK_PUBLIC_KEY);
  console.log('Wallet address: ' + wallet.address);

  const xmtp = await Client.create(wallet, { env: 'production' });
  console.log('Client created', xmtp.address);

  const WALLET_TO = '0x395BCeF9637ff4aF2df7Af1c2f53B9c681B43584';
  const isOnProdNetwork = await xmtp.canMessage(WALLET_TO);
  console.log('Can message: ' + isOnProdNetwork);

  const conversation = await xmtp.conversations.newConversation(WALLET_TO);
  console.log('Conversation created', conversation);

  const message = await conversation.send('gm');
  console.log('Message sent', message);

  for await (const message of await xmtp.conversations.streamAllMessages()) {
    console.log(
      `New message from ${message.senderAddress}: ${message.content}`,
    );
  }
};
