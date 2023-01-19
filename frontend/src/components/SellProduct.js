import React from "react";
import "../css/SellProduct.css";
import SellProductForm from "./SellProductForm";
import { useState, useEffect } from "react";
import SellerNavbar from "./SellerNavbar";
import { customInstance } from "../helpers/axios";
import productimg from "../img/wheat.jpg";
const SellProduct = () => {
  const [isCrossed, setisCrossed] = useState(false);
  const [isAddProduct, setisAddProduct] = useState(false);
  const [ongoing, setOngoing] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const func = async () => {
      const axios = customInstance();
      const data = await axios.get("/seller/activeProducts");
      setOngoing([...data.data]);
    };
    func();
  }, []);
  useEffect(() => {
    setLoading(false);
    console.log(ongoing);
  }, [ongoing]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <SellerNavbar />
      <div className="sellProduct-main-container">
        <div className="sellProduct-wrapper">
          <h1 className="sellProduct-heading">
            Start Selling Your Product Here!
          </h1>

          <div className="product-container">
            {ongoing.length > 0 &&
              ongoing.map((product) => {
                return (
                  <div className="product">
                    <div
                      className="product-img-1"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className="product-details">
                      <h1>{product.name}</h1>
                      <div className="bid-info">
                        <div className="current-bid">
                          <p>Current Bid</p>
                          <p>
                            {product.currentBidder
                              ? product.currentBidder.name
                              : "None"}
                          </p>
                        </div>
                        <div className="highest-bidder">
                          <p>Highest Bider</p>
                          <p>{product.currentBid}</p>
                        </div>
                      </div>
                      <div className="sell-btn">
                        <button>Sell</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/*           
            <div className="product">
                <div className="product-img"></div>
                <div className="product-main-details">
                <div className="product-name">
                    <h1>Wheat</h1>
                </div>
                <div className="product-bid-details">

                    <div>
                        <p>Current bid</p>
                        <p>$200.00</p>
                    </div>
                    <div className="seperator"></div>
                    <div>
                        <p>Highest bidder</p>
                        <p>Name</p>
                    </div>
                </div>
                <div className="sell-btn-div">
                    <button >Sell Product</button>

                </div>
                </div>
              
         
            
          </div> */}

          <button
            className="add-product-btn"
            onClick={() => {
              setisCrossed(false);
              setisAddProduct(true);
            }}
          >
            Add Product
          </button>
        </div>
      </div>

      {isAddProduct && !isCrossed ? (
        <div className="sell-product-form">
          <div className="cross-btn">
            <div
              className="hamburger"
              onClick={() => {
                setisCrossed(true);
                setisAddProduct(false);
              }}
            >
              <div className="hamburger_lines"></div>
              <div className="hamburger_lines"></div>
            </div>
          </div>
          <SellProductForm
            setisCrossed={setisCrossed}
            setisAddProduct={setisAddProduct}
            setter={setOngoing}
          ></SellProductForm>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SellProduct;
