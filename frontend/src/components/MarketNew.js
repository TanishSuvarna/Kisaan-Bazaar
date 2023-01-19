import "../css/MarketNew.css";
import React from "react";
import wheat from "../img/wheat.jpg";
import rice from "../img/rice.jpg";
import jowar from "../img/jowar.jpg";
import corn from "../img/corn.jpg";
import veg from "../img/veg.webp";
import tomatos from "../img/tomatos.jpg";
import carrot from "../img/carrot.jpg";
import veg2 from "../img/veg2.jpg";
import peas from "../img/peas.jpg";
import banana from "../img/banana.jpg";
import kiwi from "../img/kiwi.jpg";
import apple from "../img/apple.jpg";
import orange from "../img/orange.jpg";

import potatos from "../img/potatos.jpg";
import BuyerNavbar from "./BuyerNavbar";
const MarketNew = () => {
  return (
    <>



      <div className="main-market-container">
        <div className="market-main-heading">
          <h1>
            <span>Kisan</span> Market
          </h1>
          <p>
            Get best quality Groceries for your Shop directly from the farm.
          </p>
        </div>
        <div className="market-container-wrapper">
          <div className="market-product-catagory-1">
            <div className="product-heading">
              <h1>Grains</h1>
              <p>Top quality grains from top quality vendors</p>
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
              <p>Top quality Vegetable from top quality vendors</p>
            </div>
            <div className="market-products-div">
              <div
                className="market-product"
                style={{ backgroundImage: `url(${potatos})`, content: "" }}
              >
                <div>
                  <h1>Potatos</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${tomatos})` }}
              >
                <div>
                  <h1>Tomatos</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${carrot})` }}
              >
                <div>
                  <h1>Carrot</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${peas})` }}
              >
                <div>
                  <h1>Peas</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="market-product-catagory-1">
            <div className="product-heading">
              <h1>Fruits</h1>
              <p>Top quality fruits from top quality vendors</p>
            </div>
            <div className="market-products-div">
              <div
                className="market-product"
                style={{ backgroundImage: `url(${banana})`, content: "" }}
              >
                <div>
                  <h1>Banana</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${apple})` }}
              >
                <div>
                  <h1>Apple</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${orange})` }}
              >
                <div>
                  <h1>Orange</h1>
                </div>
              </div>
              <div
                className="market-product"
                style={{ backgroundImage: `url(${kiwi})` }}
              >
                <div>
                  <h1>Kiwi</h1>
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
