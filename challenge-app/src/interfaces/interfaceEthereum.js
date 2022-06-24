import { ethers } from 'ethers';
import {
    insertVoucher,
    insertRelayer,
    buyNFT
  } from "../interfaces/interfaceOffchain"
  

async function connect_wallet() {
    if(!window.ethereum) {
        return false
    }
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner()
        return signer
    } catch (error) {
        console.log('Error in connecting wallet',error);
        return "error in onnecting wallet"
    }    
}

async function getSignature(signer,hashMessage){
    try{
        return await signer.signMessage(ethers.utils.arrayify(hashMessage))
    }catch(error){
        console.log("error in signing message",error);
        return "error in signing message"
    }
}

async function get_address(signer){
    try{
    return await signer.getAddress()
    }catch(error){
        console.log("error in getting address",error);
        return "error in getting address"
    }
}

async function get_chainId(signer){
    try{
        console.log("chain",signer)
    return await signer.getChainId()
    }catch(error){
        console.log("error in getting ChainId",error);
        return "error in getting ChainId"
    }
}

async function connectContract(contractAddress,abi,signer){
    try{
        const contract = new ethers.Contract(contractAddress,abi,signer)
        return contract;
    }catch(error){
        console.log("error in connecting contract",error);
        return "error in connecting contract"
    }
    
}

export {connect_wallet,getSignature,get_address,get_chainId,connectContract}


//Signatures produced by web3.js are the concatenation of r, s, and v, so a necessary first step is splitting those parameters back out.