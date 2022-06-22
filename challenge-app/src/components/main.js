import {
  connect_wallet,
  getSignature,
  get_address,
  get_chainId,
  connectContract
} from "../interfaces/interfaceEthereum";
import {
   marketPlace,
   nft,
   bafc_nft,
   RelayerAddress } from "../interfaces/interfaceNFT";
import {
  createVoucher,
} from "../helper/voucher";
import {
  insertVoucher
} from "../interfaces/interfaceOffchain"
import { useState } from "react";


function Lazyminting() {

  const [Signer, SetSigner]=useState("")
  const [WalletAddress, SetWalletAddress] = useState("");
  const [ChainId, SetChainId] = useState("");
  const [Price,setPrice] = useState(0)
  const [Uri,setUri] = useState("")

  const bus ={
    HashedMessage:'',
    Signature:'',
    Voucher:''
  }
  async function wallet() {
    
    
    const signer = await connect_wallet();
    if (!signer) {
        alert("Install wallet first")
    }

    SetSigner(signer)
    SetWalletAddress(await get_address(signer));
    SetChainId(await get_chainId(signer));
    }

    async function generateVoucher(){

      console.log("marketPlaceAddress",marketPlace.address)
      console.log("bafc_nft",bafc_nft.address)
      console.log("WalletAddress",WalletAddress)
      const contract = await connectContract(marketPlace.address,marketPlace.abi,Signer)
      const nonce = await contract.get_nonce(WalletAddress)
      console.log("nonce",parseInt(nonce._hex))
      setUri("imagePath")
      console.log("Uri",Uri)
      setPrice(99)
      console.log("Price",Price)  
      const {voucher} = createVoucher(marketPlace.address,parseInt(nonce._hex),ChainId,"imagePath",WalletAddress,Price)
      bus.Voucher = voucher
      console.log("voucher",voucher)
      bus.HashedMessage = await contract.get_Message_Hash(voucher)
      console.log("hashed message",bus.HashedMessage)
      bus.Signature = await getSignature(Signer,bus.HashedMessage)
      console.log("hashed message",bus.Signature)
      bus.Voucher.signature = bus.Signature; 
      console.log("Voucher:::::::",bus.Voucher)
      const saving = await insertVoucher(bus.Voucher)
      delete bus.Voucher.signature
      // console.log(saving)

      }


      async function metaTransaction(){
        const contract = await connectContract(marketPlace.address,marketPlace.abi,Signer)
        console.log("signature",bus.Signature)
        console.log('Voucher*****',bus.Voucher)
        const verify = await contract.Meta_transfer(bus.Voucher,bus.HashedMessage,bus.Signature,nft.address,WalletAddress,{ value: 100 })
        // (voucher calldata _voucher,bytes32 _messageHash,address _buyer,bytes memory _signature,address _NFTadress
        console.log("verify",verify)

      }


  return (
    <>
      <p>LazyMinting Dapp</p>
      <button onClick={wallet}>connect wallet</button>
      <p>YOUR WALLET ADDRESS IS: {WalletAddress} </p>
      <p>CHAINID IS: {ChainId} </p>
      <button onClick={generateVoucher}>List NFT</button>
      <p>YOUR NONCE IS:ok</p>
      <button onClick={metaTransaction}>Buy NFT</button>
      <p>YOUR NONCE IS:ok</p>
    </>
  );
}

export default Lazyminting;
