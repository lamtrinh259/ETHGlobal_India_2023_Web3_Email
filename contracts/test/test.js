const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CipherInboxRegistry contract", function () {
    let cipherInboxRegistry;
    let defaultAdmin;
    let minter;
    let otherAccount;
    let tokenId = 1;
    let tokenURI = "https://example.com/token1";

    beforeEach(async function () {
        [defaultAdmin, minter, otherAccount] = await ethers.getSigners();
        console.log(defaultAdmin.address, minter.address, otherAccount.address)
        const CipherInboxRegistry = await ethers.getContractFactory("CipherInboxRegistry");
        cipherInboxRegistry = await CipherInboxRegistry.deploy(defaultAdmin.address, minter.address);
        await cipherInboxRegistry.waitForDeployment();
    });

    describe("Deployment", function () {
        it("Should set the right default admin and minter", async function () {
            expect(await cipherInboxRegistry.hasRole(cipherInboxRegistry.MINTER_ROLE(), minter.address)).to.equal(true);
        });
    });

    describe("Minting", function () {
        it("Should mint a new token", async function () {
            await expect(cipherInboxRegistry.connect(minter).safeMint(otherAccount.address, tokenId, tokenURI))
                .to.emit(cipherInboxRegistry, 'Transfer')
                .withArgs(ethers.ZeroAddress, otherAccount.address, tokenId);

            expect(await cipherInboxRegistry.tokenURI(tokenId)).to.equal(tokenURI);
        });
    });

    describe("Token URI", function () {
        it("Should return correct token URI", async function () {
            await cipherInboxRegistry.connect(minter).safeMint(otherAccount.address, tokenId, tokenURI);
            expect(await cipherInboxRegistry.tokenURI(tokenId)).to.equal(tokenURI);
        });
    });

    describe("Transfer", function () {
        it("Should prevent transfers", async function () {
            await cipherInboxRegistry.connect(minter).safeMint(otherAccount.address, tokenId, tokenURI);
            await expect(cipherInboxRegistry.connect(otherAccount).transferFrom(otherAccount.address, minter.address, tokenId))
                .to.be.revertedWith("SBT: transfer disabled");
        });
    });

    describe("Interface support", function () {
        it("Should support ERC721 and AccessControl interfaces", async function () {
            expect(await cipherInboxRegistry.supportsInterface('0x80ac58cd')).to.equal(true); // ERC721
            expect(await cipherInboxRegistry.supportsInterface('0x7965db0b')).to.equal(true); // AccessControl
        });
    });
});
