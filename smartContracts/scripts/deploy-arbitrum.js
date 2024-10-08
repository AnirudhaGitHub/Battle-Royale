// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await ethers.getSigners();

  // Replace these values with your actual Wormhole Relayer and owner addresses
  const wormholeRelayerAddress = "0x7B1bD7a6b4E61c2a123AC6BC2cbfC614437D0470";
  const ownerAddress = deployer.address;

  // Compile the contract
  const AssetTransferWormhole = await ethers.getContractFactory("AssetTransferWormhole");

  // Deploy the contract
  const assetTransferWormhole = await AssetTransferWormhole.deploy(wormholeRelayerAddress, ownerAddress);
  await assetTransferWormhole.deployed();

  console.log("AssetTransferWormhole deployed to:", assetTransferWormhole.address);

  // Add an asset
  // const tx = await assetTransferWormhole.connect(deployer).addAsset("Water", 0, ethers.utils.parseEther("0.000001")); // Example asset
  // await tx.wait();

  // console.log("Asset added");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
