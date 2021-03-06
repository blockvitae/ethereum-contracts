let HDWalletProvider = require("truffle-hdwallet-provider");

// Create variables mnemonics and infura for ETH Wallert mnemonics and infura node address
let mnemonics = ""
let infura = ""

module.exports = {
  solc: {
    optimizer: {
      // disabled by default
      enabled: true,
      // Optimize for how many times you intend to run the code.
      // Lower values will optimize more for initial deployment cost, 
      // higher values will optimize more for high-frequency usage.
      runs: 600
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonics, infura), // Infura Node
      network_id: 3
    }
  }
};
