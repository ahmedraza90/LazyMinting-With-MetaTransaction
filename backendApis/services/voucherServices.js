const { createResponse, formatResponse } = require('../helpers/utility')
const Voucher = require('../model/voucher')
const MarketPlace = require("../../smartContracts/artifacts/contracts/MarketPlace.sol/MarketPlace.json")
const { DefenderRelayProvider, DefenderRelaySigner } = require('defender-relay-client/lib/ethers');
const { ethers } = require('ethers');
const credentials = { apiKey: process.env.Relayer_API_KEY, apiSecret: process.env.Relayer_SECRET_KEY };
const provider = new DefenderRelayProvider(credentials);
const signer = new DefenderRelaySigner(credentials, provider, { speed: 'fast' });
const marketPlaceContract = new ethers.Contract(process.env.MarketPlaceAddress,MarketPlace.abi,signer);


async function InsertVoucher(data){
    var Count = await Voucher.find().count()
    data.tokenId = Count+1
    await Voucher.create(data)
    return formatResponse(201,'success', 'NFT is being listed successfuly')
}

async function BuyNFT(tokenId,data){
    const meta = await marketPlaceContract.Meta_transfer(placeOrder,placeOrder.HashedMessage,placeOrder.Signature,process.env.nftAddress,placeOrder.buyer_address,{ value: 100 })
    if(meta==placeOrder.signerAddress){
        data.minted = true
    }
    const placeOrder = await Voucher.findOneAndUpdate({ tokenId },data,{ new: true })
    return formatResponse(200,"Success", "",{placeOrder})
    
}
async function getNFTs(){
    const nfts = await Voucher.find({order_matched:false}).limit(6)
    return formatResponse(200,"Success", "", {nfts})
}

module.exports={
    InsertVoucher,
    BuyNFT,
    getNFTs
}