import React from "react";
import "../css/ProductDescription.css";
import productImg from "../img/corn.jpg";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { customInstance } from "../helpers/axios";
const ProductDescription = () => {
  const [currProduct , setcurrProduct] = useState();
  const {id } = useParams();
  
  useEffect(() => {
    const func = async () => { 
    const axios = customInstance();
      try{
        const product = await axios.get(`/buyer/activeProducts/product/${id}`);
        setcurrProduct(product.data.allProducts[0]);
        console.log(product.data.allProducts[0])
      }catch(err){
        alert("Something Went Wrong PLease Try Again Later");
      }}
    func()
  },[])
  if(!currProduct) return <h1>Loading...</h1>
  return (
    <>
      <div className="main-product-container">
        <div className="main-product-wrapper">
          <div className="main-product">
            <div
              className="main-product-image"
              style={{ backgroundImage: `url(${currProduct.image})` }}
            ></div>

            <div className="main-product-info">
              <div className="product-name">
                <h1>Wheat</h1>
                <p className="product-description">
                  {currProduct.description}
                </p>
              </div>

              <div className="product-seller-name">
                <h1>
                  Seller: <span>{currProduct.owner.firstName}</span>{" "}
                </h1>
              </div>

              <div className="product-bid-time-left">
                <h1>Time left:</h1>
                <div className="time-holder">
                  <div>
                    <h1>2</h1> <p>{}</p>
                  </div>
                  <div>
                    <h1>2</h1> <p>{}</p>
                  </div>
                  <div>
                    <h1>2</h1> <p>{}</p>
                  </div>
                </div>
              </div>

              <div className="product-current-bid">
                <h1>
                  Current Bid: <span>{currProduct.currentBid}</span>
                </h1>
              </div>

              <div className="product-bid-increaser">
                <input type="number" />
                <button>Bid</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
