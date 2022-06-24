import NFT from "smartContracts/artifacts/contracts/NFT.sol/NFT.json"
import MarketPlace from "smartContracts/artifacts/contracts/MarketPlace.sol/MarketPlace.json"
import BAFC_NFT from "smartContracts/artifacts/contracts/BAFC_NFT.sol/BAFC_NFT.json"


const marketPlace={
    address:process.env.REACT_APP_MarketPlaceAddress,
    abi:MarketPlace.abi
  }
const nft={
    address:process.env.REACT_APP_BAFC_NFTAddress,
    abi:NFT.abi
  }
const bafc_nft={
    address:process.env.REACT_APP_BAFC_NFTAddress,
    abi:BAFC_NFT.abi
  }
const RelayerAddress = {
  address: process.env.REACT_APP_MarketPlaceAddress
}
export {marketPlace,nft,bafc_nft,RelayerAddress}