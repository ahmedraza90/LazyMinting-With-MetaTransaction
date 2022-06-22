// SPDX-License-Identifier: MIT
//npm install @openzepplin/contracts
pragma solidity ^0.8.0;

import "./@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./@openzeppelin/contracts/access/AccessControl.sol";

abstract contract NFT is ERC721, ERC721URIStorage, AccessControl {

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");

    constructor(string memory name,string memory symbol,address _marketplace) ERC721(name,symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, _marketplace);//allow marketplace to mint tokens
        _grantRole(TRANSFER_ROLE, _marketplace);
    }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function balanceOf(address owner)
        public
        view
        override(ERC721)
        returns(uint256){

            return super.balanceOf(owner);
        }
    
    function  ownerOf(uint256 tokenId)
        public
        view
        override(ERC721)
        returns(address){
            return super. ownerOf(tokenId);
        }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
        
    ) public override(ERC721) {
        require(_isApprovedOrOwner(_msgSender(), tokenId) || hasRole(TRANSFER_ROLE,_msgSender()), "ERC721: caller is not token owner nor approved");//authorizes account that have transfer role like marketplaces
        _safeTransfer(from, to, tokenId,"");
    }
}

// NFT
// superkeywrod :super keyword will let you call functions defined in a parent contract, even if they are overridden. This mechanism can be used to add additional checks to a function, emit events, or otherwise add functionality as you see fit.