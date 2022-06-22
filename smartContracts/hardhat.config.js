require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("deploy", "Deploys the contracts", async (taskArgs, hre) => {
  console.log("hello")
    const marketPlaceContractFActory = await hre.ethers.getContractFactory("MarketPlace")
    const marketPlace = await marketPlaceContractFActory.deploy()
    console.log('MarketPlace Contract deployed to address',marketPlace.address)
    
    const nftContractFactory = await hre.ethers.getContractFactory("BAFC_NFT")
    const nft = await nftContractFactory.deploy(marketPlace.address)
    console.log('BAFC_NFT Contract deployed to address',nft.address)

});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks:{
    hardhat:{
      chainId:31337
    },
  },
  solidity: "0.8.4",
};
