const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = "a23456789012";

module.exports = {
    networks: {
        ganache: {
          host: "127.0.0.1",
          port: 8545,
          network_id: "5777",
        }
    } , 
    compilers : {
      solc :{
        version : '0.5.16'
      }
    }
};