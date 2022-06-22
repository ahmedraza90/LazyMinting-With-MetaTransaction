// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  
    console.log("hello")
    const marketPlaceContractFActory = await hre.ethers.getContractFactory("MarketPlace")
    const marketPlace = await marketPlaceContractFActory.deploy()
    console.log('MarketPlace Contract deployed to address',marketPLace.address)
    
    
    const nftContractFactory = await hre.ethers.getContractFactory("BAFC_NFT")
    const nft = await marketPlaceContractFActory.deploy(marketPlace.address)
    console.log('BAFC_NFT Contract deployed to address')

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
