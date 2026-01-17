const { ethers } = require("ethers");
const config = require("./config");

async function getRewards(address) {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);

  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    provider
  );

  const staked = await contract.balanceOf(address);
  const rewards = await contract.earned(address);

  return {
    staked: staked.toString(),
    rewards: rewards.toString()
  };
}

module.exports = { getRewards };
