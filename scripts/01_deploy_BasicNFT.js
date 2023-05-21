const hre = require("hardhat");

async function main() {

  const BasicNFT = await hre.ethers.getContractFactory("BasicNFT");
  const basicNFT = await Lock.deploy("BasicNFT","BNFT");

  await basicNFT.deployed();

  console.log(
    `BasicNFT is deployed to ${basicNFT.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
