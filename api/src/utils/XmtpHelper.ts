//Import libraries
import { Client } from '@xmtp/xmtp-js';
import { Wallet } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

export const xmtpUtil = async (message) => {
  const xmtp = await Client.create(Wallet.createRandom(), {
    env: 'production',
  });
  const isOnProdNetwork = await xmtp.canMessage(message.to);
  console.log('Can message: ' + isOnProdNetwork);
  if (!isOnProdNetwork) {
    throw new Error('User in not in network');
  }
  const conversation = await xmtp.conversations.newConversation(message.to);
  console.log('Conversation: ' + conversation);
  await conversation.send(message);
  console.log('Conversation sent');
};
