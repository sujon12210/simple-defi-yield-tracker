const { getRewards } = require("./yield");

async function start() {
  const address = process.argv[2];

  if (!address) {
    console.log("Please enter a wallet address");
    return;
  }

  const data = await getRewards(address);

  console.log("Wallet:", address);
  console.log("Staked:", data.staked);
  console.log("Rewards:", data.rewards);
}

start();
