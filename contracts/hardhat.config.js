require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");
console.log(process.env.PRIVATE_KEY)
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    scrollTestnet: {
        url: "https://sepolia-rpc.scroll.io", // Replace with actual Scroll Testnet RPC URL
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    polygonMumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    polygonZkEvmTestnet: {
        url: "https://rpc.public.zkevm-test.net", // Replace with actual Polygon zkEVM Testnet RPC URL
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
},
etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    url:"https://mumbai.polygonscan.com",
    apiKey: process.env.API_KEY
  },
sourcify: {
    // Disabled by default
    // Doesn't need an API key
    url:"https://mumbai.polygonscan.com",
    enabled: true
  }
};
