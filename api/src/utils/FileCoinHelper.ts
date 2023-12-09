import * as dotenv from 'dotenv';
dotenv.config();
import { ethers } from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';

const signAuthMessage = async (publicKey, privateKey) => {
  const provider = new ethers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
};

export const shareFile = async () => {
  try {
    const cid = process.env.CID;
    // CID: Unique identifier for content on IPFS.

    const publicKey = process.env.PUBLIC_KEY;
    // PublicKey: Your Lighthouse identity.

    const privateKey = process.env.PRIVATE_KEY;
    // PrivateKey: Secured key for authentication, stored away from the codebase.

    const signedMessage = await signAuthMessage(publicKey, privateKey);
    // SignedMessage: A verified authentication message for security.

    const receiverPublicKey = ['0x7B8A4ffeE3cbEd633d1C560076c5352809Cc4878'];
    // ReceiverPublicKey: Intended recipient's Lighthouse identity.

    const shareResponse = await lighthouse.shareFile(
      publicKey,
      receiverPublicKey,
      cid,
      signedMessage,
    );
    // ShareFile: Lighthouse function to securely share your file.

    console.log(shareResponse);
    // ResponseOutput: Shows the result of the file-sharing action.

    // Navigate to view the shared file:
    // <https://files.lighthouse.storage/viewFile/><cid>
  } catch (error) {
    console.log(error);
  }
};
