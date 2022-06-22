// SPDX-License-Identifier: MIT
//npm install @openzepplin/contracts
pragma solidity ^0.8.4;
pragma abicoder v2;

import "./@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./@openzeppelin/contracts/utils/Counters.sol";
import "./@openzeppelin/contracts/access/Ownable.sol";
import "./@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "./verifySignature.sol";


contract MarketPlace is EIP712,VerifySignature{

      mapping(address=>uint256) public nonce;

      struct voucher {
          address contractAddress;
          uint256 tokenId;
          uint256 price;
          uint256 nonce;    
          string Uri;  
          address signerAddress;
      }
      constructor()  EIP712("challeng-dapp", "1"){}
        
      function get_nonce(address _signer) public view returns(uint256){
          return nonce[_signer];
      }

      function get_Message_Hash(voucher calldata _voucher)public view returns(bytes32){
         //i am using it just for hashing
         return _hashTypedDataV4(keccak256(abi.encode(
          keccak256("voucher(address contractAddress,uint256 tokenId,uint256 price,uint256 nonce,string Uri,address signerAddress)"),
          _voucher.contractAddress,
          _voucher.tokenId,
          _voucher.price,
          _voucher.nonce,
          keccak256(bytes(_voucher.Uri)),
          _voucher.signerAddress    
        )));    
      }
      function Meta_transfer(voucher calldata _voucher,bytes32 _messageHash,bytes memory _signature,address _NFTadress,address _buyer)public payable returns(address){
            
            address  recoverAddress = verify(_messageHash,_signature);

            // //requirements
            require(recoverAddress == _voucher.signerAddress, "Invalid signature");
            require(msg.value >= _voucher.price, "Insufficient funds to redeem");
            require(_voucher.nonce == nonce[_voucher.signerAddress],"Invalid Transaction");
            require(_voucher.contractAddress == address(this),"NFT should does not belong to this platform" );

            //first minting nft
            bytes memory payload = abi.encodeWithSignature("safeMint(address,uint256,string)",_voucher.signerAddress,_voucher.tokenId,_voucher.Uri);
            (bool success, ) = _NFTadress.call(payload);
            require(success,"Error1 in minting");
            
            //transfering nft from signer to buyer
            bytes memory payloadz = abi.encodeWithSignature("safeTransferFrom(address,address,uint256)",_voucher.signerAddress,_buyer,_voucher.tokenId);
            (bool successs, ) = _NFTadress.call(payloadz);
            require(successs,"Error2 in minting");

            
            return recoverAddress;
            //update backend
      }
}