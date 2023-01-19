import "../css/MarketNew.css";
import React from "react";
import wheat from "../img/wheat.jpg";
import rice from "../img/rice.jpg";
import jowar from "../img/jowar.jpg";
import corn from "../img/corn.jpg";
const MarketNew = () => {
  return (
    <>
      <div className="main-market-container">
        <div className="market-container-wrapper">
          <div className="market-product-catagory-1">
            <div className="product-heading">
              <h1>GRAINS</h1>
            </div>
            <div className="market-products-div">
              <div
                className="market-product"
                style={{ backgroundImage: `url(${wheat})`, content: "" }}
              >
                <div>
                  <h1>wheat</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${rice})` }}
              >
                <div>
                  <h1>Rice</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${jowar})` }}
              >
                <div>
                  <h1>Jowar</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${corn})` }}
              >
                <div>
                  <h1>Corn</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="market-product-catagory-1">
            <div className="product-heading">
              <h1>Vegetable</h1>
            </div>
            <div className="market-products-div">
              <div
                className="market-product"
                style={{ backgroundImage: `url(${wheat})`, content: "" }}
              >
                <div>
                  <h1>wheat</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${rice})` }}
              >
                <div>
                  <h1>Rice</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${jowar})` }}
              >
                <div>
                  <h1>Jowar</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${corn})` }}
              >
                <div>
                  <h1>Corn</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="market-product-catagory-1">
            <div className="product-heading">
              <h1>Fruits</h1>
            </div>
            <div className="market-products-div">
              <div
                className="market-product"
                style={{ backgroundImage: `url(${wheat})`, content: "" }}
              >
                <div>
                  <h1>wheat</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${rice})` }}
              >
                <div>
                  <h1>Rice</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${jowar})` }}
              >
                <div>
                  <h1>Jowar</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${corn})` }}
              >
                <div>
                  <h1>Corn</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketNew;
