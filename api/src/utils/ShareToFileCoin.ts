import * as dotenv from 'dotenv';
dotenv.config();
import { ethers } from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';

const signAuthMessage = async (privateKey) => {
  const provider = new ethers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const signedMessage = await signer.signMessage(process.env.FILECOIN_API_KEY);
  return signedMessage;
};

export const shareToFileCoin = async (buffer, to) => {
  try {
    const uploadResponse = await lighthouse.uploadBuffer(
      buffer,
      process.env.FILECOIN_API_KEY,
    );
    console.log(uploadResponse);
    const cid = uploadResponse.data.Hash;
    const publicKey = process.env.PUBLIC_KEY;
    const privateKey = process.env.PRIVATE_KEY;
    const signedMessage = await signAuthMessage(privateKey);

    const shareResponse = await lighthouse.shareFile(
      publicKey,
      to,
      cid,
      signedMessage,
    );
    console.log(shareResponse);
    // ShareFile: Lighthouse function to securely share your file
    return `https://files.lighthouse.storage/viewFile/${cid}`;
  } catch (error) {
    console.log(error);
  }
};
