import { Logger } from '@nestjs/common';
import { JsonRpcProvider, Signer, ethers } from 'ethers';
const privateKey = `herlpwewe`;

export default class EthersHelper {
  private provider: JsonRpcProvider;
  private signer: Signer;
  private readonly chainId: number;
  private readonly logger = new Logger(EthersHelper.name);
  constructor(blockchainConfig) {
    const { chainId, url } = blockchainConfig;
    this.chainId = chainId;
    // this.provider = new ethers.JsonRpcProvider(url);
    this.provider = new ethers.JsonRpcProvider();
    this.signer = new ethers.Wallet(privateKey, url);
  }
}
