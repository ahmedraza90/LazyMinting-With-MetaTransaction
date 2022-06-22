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

export {insertVoucher}