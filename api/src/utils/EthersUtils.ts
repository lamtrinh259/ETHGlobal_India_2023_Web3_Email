import { Logger } from '@nestjs/common';
import { Contract, ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const contractABI = [
  {
    inputs: [
      { internalType: 'address', name: '_nftContract', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sender',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'receiver',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'encryptedEmail',
        type: 'string',
      },
    ],
    name: 'newEmail',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'publicKeys',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'recipient', type: 'string' },
      { internalType: 'string', name: 'encryptedEmail', type: 'string' },
    ],
    name: 'sendEmail',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
const contractAddress = '0x61fa7Aa2e2857fc117AdD97E7b42730000c1A0c1';

export default class EthersHelper {
  private provider;
  private contract: Contract;
  private readonly chainId: number;
  private readonly logger = new Logger(EthersHelper.name);

  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      'https://rpc.public.zkevm-test.net',
      { chainId: 1442 },
    );
  }

  async listenToEvent() {
    console.log('Listening for newEmail events...');
    this.contract.on('newEmail', (sender, receiver, encryptedEmail, event) => {
      console.log('New Email Event Received:');
      console.log('Sender:', sender);
      console.log('Receiver:', receiver);
      console.log('Encrypted Email:', encryptedEmail);
    });
  }

  async triggerNewEmailEvent(recipient, encryptedEmail) {
    try {
      console.log('Triggering new email event');
      this.contract = new ethers.Contract(
        contractAddress,
        contractABI,
        this.provider.getSigner(),
      );

      // Trigger the sendEmail function
      const transaction = await this.contract.sendEmail(
        recipient,
        encryptedEmail,
      );
      await transaction.wait(); // Wait for the transaction to be mined

      console.log('New email event triggered successfully.');
    } catch (error) {
      this.logger.error(`Error triggering new email event: ${error.message}`);
    }
  }
}
