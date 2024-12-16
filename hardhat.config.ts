    /*
Save The Private Key in the .env file
PRIVATE_KEY="YOUR PRIVATE KEY"
Important: Add the .env file to your .gitignore
*/
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    "stavanger": {
      url: "https://rpc.stavanger.gateway.fm",
      chainId: 50591822,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      
    },
    "sepolia": {
      url: "https://sepolia.infura.io/v3/2N9POOyrFRVSKiIB0fdnTNxKU7k",
      chainId: 11155111,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      
    }
  }
};

export default config;
    