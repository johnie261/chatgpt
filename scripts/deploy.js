const hre = require("hardhat");

async function main() {
  const NAME = "GPTMembership";
  const SYMBOL = "GPT";

  const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");
  const gptMembership = await GPTMembership.deploy(NAME, SYMBOL);

  await gptMembership.deployed()

  console.log("GPTMembership address:", gptMembership.address);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
})