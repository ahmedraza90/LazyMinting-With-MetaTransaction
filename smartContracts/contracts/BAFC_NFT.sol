// SPDX-License-Identifier: MIT
//npm install @openzepplin/contracts
pragma solidity ^0.8.0;
import "./NFT.sol";
contract BAFC_NFT is NFT{

    constructor (address marketPlace) NFT("Implementation of LazyMinting and MetaTransaction","Oxius",marketPlace){

    }
}