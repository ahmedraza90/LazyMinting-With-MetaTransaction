function createVoucher(marketplaceAddress,nonce,chainId,Uri,signerAddress,price){

    const voucher = {
        contractAddress: marketplaceAddress,
        tokenId:0,  //SC
        price, //FE
        nonce, //SC   
        Uri,  //FE
        signerAddress//W
    }
    return {voucher}
}

function getVoucher(_voucher,_signature){
        _voucher.signature=_signature
        return _voucher;
}
export {createVoucher,getVoucher}