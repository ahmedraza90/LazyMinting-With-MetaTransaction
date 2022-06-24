import React from "react";
import {useNavigate, Link} from 'react-router-dom'
import './Card.css'

export default function Card() {
    var x = localStorage.getItem('add')
    console.log(x);
  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">NFT NAME</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {x &&
              <button type="button" className="btn btn-primary" onClick={()=>alert("purchase successful")}>
                Buy NFT
              </button>
            }
            
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">NFT NAME</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              <button type="button" className="btn btn-primary">
                Buy NFT
              </button>
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">NFT NAME</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              <button type="button" className="btn btn-primary">
                Buy NFT
              </button>
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">NFT NAME</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              <button type="button" className="btn btn-primary">
                Buy NFT
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
