import React from "react";
import SellerNavbar from "./SellerNavbar";
import wheat from "../img/wheat.jpg";
import "../css/BuyerCart.css";
import ReactStars from "react-rating-stars-component";
const BuyerCart = () => {
  const ratingChanged = (newRating) => {
    alert(newRating);
  };
  return (
    <>
      <div className="sellProduct-main-container">
        <div className="sellProduct-wrapper">
          <div className="BuyerCart-heading">
            <h1>
              <span>Your </span>Cart
            </h1>
            <p>Keep Track of the products you have bought from our website</p>
          </div>

          <div className="product-container">
            <div className="product">
              <div
                className="product-img-1"
                style={{ backgroundImage: `url(${wheat})` }}
              ></div>
              <div className="product-details">
                <h1>Wheat</h1>
                <div className="bid-info">
                  <div className="current-bid">
                    <p>Bought At</p>
                    <p>200$</p>
                  </div>
                  <div className="highest-bidder">
                    <p>Seller</p>
                    <p>Pratham Upadhyay</p>
                  </div>
                </div>
                <div className="sell-btn">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>

            <div className="product">
              <div
                className="product-img-1"
                style={{ backgroundImage: `url(${wheat})` }}
              ></div>
              <div className="product-details">
                <h1>Wheat</h1>
                <div className="bid-info">
                  <div className="current-bid">
                    <p>Bought At</p>
                    <p>200$</p>
                  </div>
                  <div className="highest-bidder">
                    <p>Seller</p>
                    <p>Pratham Upadhyay</p>
                  </div>
                </div>
                <div className="sell-btn">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>

            <div className="product">
              <div
                className="product-img-1"
                style={{ backgroundImage: `url(${wheat})` }}
              ></div>
              <div className="product-details">
                <h1>Wheat</h1>
                <div className="bid-info">
                  <div className="current-bid">
                    <p>Bought At</p>
                    <p>200$</p>
                  </div>
                  <div className="highest-bidder">
                    <p>Seller</p>
                    <p>Pratham Upadhyay</p>
                  </div>
                </div>
                <div className="sell-btn">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default BuyerCart;
