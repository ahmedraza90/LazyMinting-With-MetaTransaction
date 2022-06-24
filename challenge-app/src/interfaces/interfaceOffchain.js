import axios from "axios";

async function insertVoucher(voucher){
    try{
    
        const response = await axios({
  
            // Endpoint to send files
            url: "http://127.0.0.1:3000/",
            method: "POST",
            headers: {
            },
        
            // Attaching the form data
            data: voucher,
          })
        return response
    }catch(e){
        console.log(e)
    }
    
}

async function insertRelayer(signer){
    try{
    
        const response = await axios({
  
            // Endpoint to send files
            url: "http://127.0.0.1:3000/relayer",
            method: "POST",
            headers: {
            },
        
            // Attaching the form data
            data: signer,
          })
        console.log("aya")
        return response
    }catch(e){
        console.log("nhi aya")
        console.log(e)
    }
    
}


async function buyNFTs(buyer_address){
    try{
        const response = await axios.post({
            buyer_address,
            order_matched:true
        })
        return response
    }catch(e){
        console.log(e)
    }
    
}

export {insertVoucher,insertRelayer,buyNFTs}