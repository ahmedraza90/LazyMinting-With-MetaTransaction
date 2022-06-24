import React, { useState } from 'react'


export default function Navbar() {
    const [wallet, setWallet] = useState('keifhghefhg')
    if(wallet){
        localStorage.setItem("add", wallet)
    }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ahmed NFT COMPANY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-danger">connect wallet</button></a>
        </li>
        {wallet && 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-warning">LIST NFT</button></a>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
