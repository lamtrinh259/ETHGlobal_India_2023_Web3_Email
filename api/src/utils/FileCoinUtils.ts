import { ethers } from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';
const jwt = require('jsonwebtoken');

const signAuthMessage = async (privateKey) => {
  const provider = new ethers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const signedMessage = await signer.signMessage(process.env.FILECOIN_API_KEY);
  return signedMessage;
};

export const uploadAttachmentsToFileCoin = async (buffer, to) => {
  try {
    const uploadResponse = await lighthouse.uploadBuffer(
      buffer,
      process.env.FILECOIN_API_KEY,
    );
    console.log(uploadResponse);
    const cid = uploadResponse.data.Hash;
    const publicKey = process.env.FILECOIN_PUBLIC_KEY;
    const privateKey = process.env.FILECOIN_PRIVATE_KEY;
    const signedMessage = await signAuthMessage(privateKey);

    const shareResponse = await lighthouse.shareFile(
      publicKey,
      [to],
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

export const uploadEmailsToFileCoins = async (data, to, from) => {
  const token = jwt.sign(data, process.env.JWT_KEY);
  const uploadResponse = await lighthouse.uploadText(
    token,
    process.env.FILECOIN_API_KEY,
  );
  const cid = uploadResponse.data.Hash;
  console.log(cid);
  const publicKey = process.env.FILECOIN_PUBLIC_KEY;
  const privateKey = process.env.FILECOIN_PRIVATE_KEY;
  const signedMessage = await signAuthMessage(privateKey);
  const shareResponse = await lighthouse.shareFile(
    publicKey,
    [to, from],
    cid,
    signedMessage,
  );
  console.log(shareResponse);
  // ShareFile: Lighthouse function to securely share your file
  return {
    cid,
    url: `https://files.lighthouse.storage/viewFile/${cid}`,
  };
};

export const fileInfo = async () => {
  /*
    @param {string} cid - cid of file.
  */
  const cid = 'QmUbtv8pbdShGSgcQd4g6CiDGXz9aMiZVCuVdNBTh9c9Vk';
  const fileInfo = await lighthouse.getFileInfo(cid);
  console.log(fileInfo);
};
