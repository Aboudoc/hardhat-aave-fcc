require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

// const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY
// const COINMARKETCAP_API_KEY = process.env.GOERLI_RPC_URL
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.7" },
            { version: "0.4.19" },
            { version: "0.6.12" },
            { version: "0.6.6" },
            { version: "0.6.0" },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
            forking: {
                url: MAINNET_RPC_URL,
            },
        },
        localhost: {
            chainId: 31337 || 1337,
            blockConfirmations: 1,
        },
        // goerli: {
        //     chainId: 5,
        //     blockConfirmations: 6,
        //     url: GOERLI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        // },
        // mainnet: {
        //     url: MAINNET_RPC_URL,
        //     accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        //     //   accounts: {
        //     //     mnemonic: MNEMONIC,
        //     //   },
        //     saveDeployments: true,
        //     chainId: 1,
        // },
    },
    // gasReporter: {
    //     enabled: false,
    //     currency: "USD",
    //     outputFile: "gas-report.txt",
    //     noColors: true,
    //     coinmarketcap: COINMARKETCAP_API_KEY,
    //     token: "ETH",
    // },
    // etherscan: {
    //     apiKey: ETHERSCAN_API_KEY,
    // },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
        user1: {
            default: 1,
        },
    },
    mocha: {
        timeout: 500000, // <=> 500s
    },
}
