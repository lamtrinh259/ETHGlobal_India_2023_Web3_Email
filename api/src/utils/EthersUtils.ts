import { Logger } from '@nestjs/common';
import { Contract, JsonRpcProvider, ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();
export default class EthersHelper {
  private provider: JsonRpcProvider;
  private contract: Contract;
  private readonly chainId: number;
  private readonly logger = new Logger(EthersHelper.name);
  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.MUMBAI_TESTNET);
    // this.contract = new ethers.Contract(
    //   process.env.CONTRACT_ADDRESS,
    //   abi,
    //   this.provider,
    // );
    this.listenToEvent();
  }

  listenToEvent() {
    this.contract.on('ValueChanged', (author, oldValue, newValue, event) => {
      // Called when anyone changes the value

      console.log(author);
      // "0x14791697260E4c9A71f18484C9f997B308e59325"

      console.log(oldValue);
      // "Hello World"

      console.log(newValue);
      // "Ilike turtles."

      // See Event Emitter below for all properties on Event
      console.log(event.blockNumber);
      // 4115004
    });
  }
}
