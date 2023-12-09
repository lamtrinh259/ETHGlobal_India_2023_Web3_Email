// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";


contract CipherInbox {
    IERC721 private nftContract;

    mapping(uint256 => string) public publicKeys;

    constructor(address _nftContract){
        nftContract = IERC721(_nftContract);
    }

    modifier onlyNFTOwner(uint256 tokenId) {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Caller is not the NFT owner");
        _;
    }

    event newEmail(uint256 sender, uint256 receiver,string encryptedEmail);

    // Function to send an email to a specific token ID
    function sendEmail(uint256 senderId, uint256 recipientId, string memory encryptedEmail) public onlyNFTOwner(senderId) {
        emit newEmail(senderId, recipientId,encryptedEmail);
    }
}
