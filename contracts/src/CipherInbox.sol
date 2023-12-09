// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
interface ICipherInboxRegistry is IERC721{
    function getTokenIdByAddress(address sender) external view returns (uint256);
}

contract CipherInbox {
    ICipherInboxRegistry private nftContract;

    mapping(uint256 => string) public publicKeys;

    constructor(address _nftContract){
        nftContract = ICipherInboxRegistry(_nftContract);
    }

    modifier onlyNFTOwner(uint256 tokenId) {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Caller is not the NFT owner");
        _;
    }

    event newEmail(uint256 sender, string receiver,string encryptedEmail);

    // Function to send an email to a specific token ID
    function sendEmail (string memory recipient, string memory encryptedEmail) public {
        uint256 senderId = nftContract.getTokenIdByAddress(msg.sender);
        require(senderId != 0, "sender account doesnt exists");
        emit newEmail(senderId, recipient,encryptedEmail);
    }
}
