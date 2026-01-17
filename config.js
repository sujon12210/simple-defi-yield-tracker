require("dotenv").config();

module.exports = {
  rpcUrl: process.env.RPC_URL,
  contractAddress: process.env.CONTRACT_ADDRESS,
  abi: require("./contractABI.json")
};
