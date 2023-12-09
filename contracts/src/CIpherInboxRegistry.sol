// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CipherInboxRegistry is ERC721, ERC721URIStorage {
    mapping(uint256 => string) private _tokenNames;
    mapping(address => uint256) private tokenByAddress;

 
    constructor() ERC721("Cipher Inbox SBT", "CIS") {
    }

    modifier onlyTokenOwner(uint256 tokenId){
        require(ownerOf(tokenId) == msg.sender,"only token owner can change details");
        _;
    }

    modifier onlyOnce(){
        require(tokenByAddress[msg.sender]==0,"you can only own one cipher inbox");
        _;
    }

    function getTokenName(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token ID does not exist");
        return _tokenNames[tokenId];
    }

    function getTokenIdByAddress(address sender) public view returns (uint256) {
        return tokenByAddress[sender];
    }

    function safeMint(string memory name, string memory uri)
        public
        onlyOnce
    {
        uint256 tokenId = nameToTokenId(name);
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        _tokenNames[tokenId] = name;
        tokenByAddress[msg.sender] = tokenId;
    }

    function setTokenUri(uint256 tokenId, string memory uri) public onlyTokenOwner(tokenId){
        _setTokenURI(tokenId, uri); 
    }

    // Convert a name to a unique tokenId
    function nameToTokenId(string memory name) public pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(name)));
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _transfer(address from, address to, uint256 tokenId) internal override  {
        require(from == address(0) || to == address(0), "SBT: transfer disabled");
        super._transfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721,ERC721URIStorage) {
        super._burn(tokenId);
        delete _tokenNames[tokenId];
    }

}
