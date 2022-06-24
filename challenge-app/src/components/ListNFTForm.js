import React from "react";
import { useState } from "react";
import {
    insertVoucher,
    buyNFTs
  } from "../interfaces/interfaceOffchain"

  
  export default function ListNFTForm() {
      const [form, setForm] = useState({
          uri:'',
          name:'',
          price:''
        })
        const handleChange=(e)=>{
            setForm({...form,[e.target.name]: e.target.value })
            
        }
        const handleSubmit = async (e)=>{
            e.preventDefault()
            const saving = await insertVoucher(form)
        
    }
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Generating voucher
      </h2>
      <div className="container">
        <form onSubmit={handleSubmit}
          style={{
            width: "50%",
            margin: "0 auto",
            border: "1px solid blue",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <div className="mb-3">
            <label className="form-label">
              Your IPFS URI
            </label>
            <input
              type="text"
              className="form-control"
              name="uri"
              value={form.uri}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Enter NFT name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="form-control"
              min="0"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
