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
  insertVoucher,
  buyNFTs
} from "../interfaces/interfaceOffchain"
import { useState } from "react";





function Lazyminting() {

  const [Signer, SetSigner]=useState("")
  const [WalletAddress, SetWalletAddress] = useState("");
  const [ChainId, SetChainId] = useState("");
  const [Price,setPrice] = useState(0)
  const [Uri,setUri] = useState("")
  const [name,setName] = useState("")

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
    SetSigner(signer)//circular structure \
    SetWalletAddress(await get_address(signer));
    SetChainId(await get_chainId(signer));
    
    }

    async function generateVoucher(){

      console.log("marketPlaceAddress",marketPlace.address)
      console.log("bafc_nft",bafc_nft.address)
      console.log("WalletAddress",WalletAddress)
      const contract = await connectContract(marketPlace.address,marketPlace.abi,Signer)
      console.log(contract)
      console.log("kkkkk")
      const nonce = await contract.get_nonce(WalletAddress)
      console.log("nonce",parseInt(nonce._hex))
      setUri("imagePath2")
      setPrice(99)
      console.log("Uri",Uri)
      console.log("Price",Price)  
      const {voucher} = createVoucher(marketPlace.address,parseInt(nonce._hex),ChainId,"imagePath",WalletAddress,Price)
      bus.Voucher = voucher
      console.log("voucher",voucher)
      bus.HashedMessage = await contract.get_Message_Hash(voucher)
      console.log("hashed message",bus.HashedMessage)
      bus.Signature = await getSignature(Signer,bus.HashedMessage)
      console.log("hashed message",bus.Signature)
      bus.Voucher.signature = bus.Signature; 
      bus.Voucher.name = name; 
      bus.Voucher.HashedMessage = bus.HashedMessage ;
      bus.Voucher.contractAddress = marketPlace.address
      console.log("Voucher:::::::",bus.Voucher)
      const saving = await insertVoucher(bus.Voucher)
      // delete bus.Voucher.signature
      // console.log(saving)

      }


      function form(){
        var uid = document.registration.userid;
        return uid;
        
      }
      async function buyNFT(nftId){
        try{
          await buyNFTs(nftId)
        }catch(e){
          console.log(e)
        }
      }


  return (
    <>
      <p>LazyMinting Dapp</p>
      <button onClick={wallet}>connect wallet</button>
      <p>YOUR WALLET ADDRESS IS: {WalletAddress} </p>
      <p>CHAINID IS: {ChainId} </p>
      <button onClick={generateVoucher}>List NFT</button>
      <p>YOUR NONCE IS:ok</p>
      <button onClick={buyNFT}>Buy NFT</button>
      <p>YOUR NONCE IS:ok</p>
    </>
  );
}

export default Lazyminting;
