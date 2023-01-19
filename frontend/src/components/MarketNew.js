import "../css/MarketNew.css";
import React from "react";
import wheat from "../img/wheat.jpg";
import rice from "../img/rice.jpg";
import jowar from "../img/jowar.jpg";
import corn from "../img/corn.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const MarketNew = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/buyer/market/${e.target.getAttribute("name")}`)
  } 
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
                  <h1 name = "Wheat"
                onClick = {handleClick}>wheat</h1>
                </div>
              </div>
              <div
                className="market-product"
                
                style={{ backgroundImage: `url(${rice})` }}
              >
                <div>
                  <h1 name = "Rice"
                onClick = {handleClick}>Rice</h1>
                </div>
              </div>
              <div className="market-product"
                style={{ backgroundImage: `url(${jowar})` }}
              >
                <div>
                  <h1 onClick = {handleClick} className="market-product"
                name = "Jowar">Jowar</h1>
                </div>
              </div>
              <div
                className="market-product"
                
                style={{ backgroundImage: `url(${corn})` }}
              >
                <div>
                  <h1 name = "Corn"
                onClick = {handleClick}>Corn</h1>
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
                  <h1 name = "Tomato"
                onClick = {handleClick}>wheat</h1>
                </div>
              </div>
              <div
                className="market-product"
                
                style={{ backgroundImage: `url(${rice})` }}
              >
                <div>
                  <h1 name = "Methi"
                onClick = {handleClick}>Rice</h1>
                </div>
              </div>
              <div
                className="market-product"
                
                style={{ backgroundImage: `url(${jowar})` }}
              >
                <div>
                  <h1 name = "Sprouts"
                onClick = {handleClick}>Jowar</h1>
                </div>
              </div>
              <div
                className="market-product"
                
                style={{ backgroundImage: `url(${corn})` }}
              >
                <div>
                  <h1 name = "LadyFinger"
                onClick = {handleClick}>Corn</h1>
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
                  <h1 name = "Banana"
                onClick = {handleClick}>wheat</h1>
                </div>
              </div>
              <div
                className="market-product"
                name = "Watermelon"
                onClick = {handleClick}
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
                  <h1 name = "Apple"
                onClick = {handleClick}>Jowar</h1>
                </div>
              </div>
              <div
                className="market-product"
                
                style={{ backgroundImage: `url(${corn})` }}
              >
                <div>
                  <h1 name = "Custard Apple"
                onClick = {handleClick}>Corn</h1>
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
