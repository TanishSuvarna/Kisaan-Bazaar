import React from "react";

import "../css/SellerDashboard.css";
import { Link } from "react-router-dom";

const SellerNavbar = () => {
  return (
    <>
     <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dash-navbar">
          <div className="dash-navbar-wrapper">
            <div className="dash-logo"></div>

            <div className="dash-nav-links-div">
              <Link to={"/"}>
                <li className="dash-nav-links">Home</li>
              </Link>
              <Link to={"SellProduct"}>
                {" "}
                <li className="dash-nav-links">Sell Products</li>
              </Link>

              <li className="dash-nav-links">Ongoing Auctions</li>
              <li className="dash-nav-links">Previous Auctions</li>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
   
  );
};

export default SellerNavbar;
