const { createResponse, formatResponse } = require('../helpers/utility')
const voucher = require('../model/voucher')

async function InsertVoucher(data){
    console.log(data)
    const a = await voucher.create(data)
    console.log(a)
    return formatResponse(201,'success', 'Inserted successfully')
}

async function buyNFT(tokenId){
    const transaction = await voucher.findOne({ tokenId })
}

module.exports={
    InsertVoucher,
    buyNFT,
}