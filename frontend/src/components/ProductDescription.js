import React from "react";
import "../css/ProductDescription.css";
import productImg from "../img/corn.jpg";

const ProductDescription = () => {
  return (
    <>
      <div className="main-product-container">
        <div className="main-product-wrapper">
          <div className="main-product">
            <div
              className="main-product-image"
              style={{ backgroundImage: `url(${productImg})` }}
            ></div>

            <div className="main-product-info">
              <div className="product-name">
                <h1>Wheat</h1>
                <p className="product-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda a consequuntur necessitatibus nesciunt, itaque
                  deleniti delectus aperiam facere minima iusto?
                </p>
              </div>

              <div className="product-seller-name">
                <h1>
                  Seller: <span>Pratham Upadhyay</span>{" "}
                </h1>
              </div>

              <div className="product-bid-time-left">
                <h1>Time left:</h1>
                <div className="time-holder">
                  <div>
                    <h1>2</h1> <p>Days</p>
                  </div>
                  <div>
                    <h1>2</h1> <p>hrs</p>
                  </div>
                  <div>
                    <h1>2</h1> <p>minutes</p>
                  </div>
                </div>
              </div>

              <div className="product-current-bid">
                <h1>
                  Current Bid: <span>1,000.0$</span>
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
