# LazyMinting-With-MetaTransaction
We are implementing Lazyminting with MetaTransaction. this implementation is used to make gas free Dapp. 

# BASIC FLOW
when Seller will list the NFT, this nft will be saved in orderbook(offchain database).
when buyer intents to buy the nft. he will placed order this order be saved in the orderbook(offchain database)   
after saving the buyer order relayer will mint and transfer this nft

![Screenshot (61)](https://user-images.githubusercontent.com/61561367/175577091-2c39797f-3746-4b43-955d-4948d6c323b5.png)

# TECH STACK
SmartContract: Solidity is being used to write smartcontracts.<br />
1--MarketPlace NFT: this contract act as proxy contract to mint and transfer token<br />
2--NFT contract: this is ERC721 token.<br />
3--BAFC_NFT : this token inherits NFT contract. used to instantiate this NFT <br />
4--VerifySignature : this contract act as a library to verify signature using standards of EIP712<br />
<br />
Backend APis: Nodejs is used to control offchain operations and Mongodb is used to store Vouchers<br />
1--Seller api to store vouchers<br />
2--Buyer api to match orders<br />
3--api for getting list of nfts which are not minted for marketplace.<br />
<br />
FrontEnd:
Reactjs is being to to structure frontend.<br />
Bootstrap is being used to design website.<br />

# ABOUT RELAYERS
1--Hot walllet is being generated on openzpllin for relayer.<br />
2--npm library "defender-relay-client" is being used to wrap transaction with relayers address<tx>.<br />
  
# META TRANSFER FUNCTION(Special Mint Function)
this function lies int the marketPlace(proxy) smartcontract. this function makes external calls to ERC721 contract in order to mint and transfer token.
  ![Screenshot (63)](https://user-images.githubusercontent.com/61561367/175599779-03828c14-41a0-46ba-854d-e4767be62487.png)

