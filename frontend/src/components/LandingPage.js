import React from "react";
import { useState } from "react";

import "../css/LandingPage.css";
import Login2 from "./Login2";
import Sign from "./Sign";
const LandingPage = () => {
  const [crossClicked, setcrossClicked] = useState(false);

  const [isSignup, setisSignup] = useState(false);

  const [isSignin, setisSignin] = useState(false);

  // const [burger_class, setBurgerClass] = useState("hamburger_lines unclicked");

  // const [isMenuClicked, setIsMenuClicked] = useState(false);
  // const updateMenu = () => {
  //   if (!isMenuClicked) {
  //     setBurgerClass("hamburger_lines  clicked");

  //     document.body.style.overflow = "hidden";
  //     // setMenuClass("menu_bar menu_visible");
  //   } else {
  //     setBurgerClass("hamburger_lines unclicked");

  //     document.body.style.overflow = "auto";
  //     // setMenuClass("menu_bar menu_hidden");
  //   }
  //   setIsMenuClicked(!isMenuClicked);
  // };

  return (
    <>
      <div className="landing-container">
        <div className="scroll_down_btn_div">
          <div className="scroll_down_btn"></div>
        </div>
        <div className="landing-page-background"></div>

        <div className="main-navbar">
          <div className="navbar-wrapper">
            <div className="logo"></div>
            <div className="navbar-links-div">
              {" "}
              <li className="navbar-links">Home</li>
              <li className="navbar-links">Market</li>
              <li className="navbar-links">Contact</li>
              <li className="navbar-links">Learn</li>
              <li
                className="navbar-links "
                onClick={() => {
                  setisSignup(true);
                  setisSignin(false);
                  setcrossClicked(false);
                }}
              >
                Sign Up
              </li>
              <li
                className="navbar-links "
                onClick={() => {
                  setisSignup(false);
                  setisSignin(true);
                  setcrossClicked(false);
                }}
              >
                Sign In
              </li>
            </div>
          </div>
        </div>
        <div className="landing-wrapper">
          <div className="slogan">
            <h1>Farmers Market Place</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sed
              alias sapiente doloremque obcaecati. Facilis consectetur quisquam
              quibusdam ipsa dolores.
            </p>
          </div>
        </div>
      </div>

      <div className="landing-section-2">
        <div className="back-lines"></div>
        <div className="landing-section-2-wrapper">
          <div className="our-solution">
            <div>
              {" "}
              <h1>
                {" "}
                <span>Our</span> Solution
              </h1>
              <p>
                <span>Kisan Bazaar</span> is a digital B2B market solution that
                brings together Farmers and Industrial Buyers
              </p>
            </div>

            <p className="philosophy">
              We drive agricultural transactions through our digital platform in
              combination with our service partnership network. Kisan Bazaar
              accommodates online payments between buyer and seller.
            </p>

            <button>Explore the market</button>
          </div>
          <div className="landing-section-2-imgs"></div>
        </div>
      </div>

      <div className="landing-section-3">
        <div className="landing-section-3-wrapper">
          <div className="Buyer">
            <div className="Buyer-div">
              <p>ARE YOU LOOKING TO BUY SOMETHING </p>
              <h1>BUYER</h1>
            </div>
          </div>
          <div className="Seller">
            <div className="Seller-div">
              <p>ARE YOU LOOKING TO SELL SOMETHING </p>
              <h1>SELLER</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="back-lines"> </div>
        <div className="features-wrapper">
          <div className="features-heading">
            <h1>
              <span>Key</span> Features
            </h1>
          </div>

          <div className="features-main-section">
            <div className=" feature-box">
              <h1>Sell Your Products</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora beatae, optio ab eos amet ut inventore placeat animi sit
                eveniet officiis sequi veritatis, temporibus sed! Quibusdam
                praesentium fuga nemo distinctio.
              </p>
            </div>
            <div className="feature-box">
              <h1>Buy Products</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora beatae, optio ab eos amet ut inventore placeat animi sit
                eveniet officiis sequi veritatis, temporibus sed! Quibusdam
                praesentium fuga nemo distinctio.
              </p>
            </div>
            <div className="feature-box">
              <h1>Learn to farm</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora beatae, optio ab eos amet ut inventore placeat animi sit
                eveniet officiis sequi veritatis, temporibus sed! Quibusdam
                praesentium fuga nemo distinctio.
              </p>
            </div>
            <div className="feature-box">
              <h1>Compare the best prices</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora beatae, optio ab eos amet ut inventore placeat animi sit
                eveniet officiis sequi veritatis, temporibus sed! Quibusdam
                praesentium fuga nemo distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isSignin && !crossClicked ? (
        <div className="login_page">
          <div className="cross-btn">
            <div
              className="hamburger"
              onClick={() => {
                setcrossClicked(true);
                setisSignin(false);
                setisSignup(false);
              }}
            >
              <div className="hamburger_lines"></div>
              <div className="hamburger_lines"></div>
            </div>
          </div>
          <Login2 setcrossClicked={setcrossClicked} setisSignin = {setisSignin} setisSignup = {setisSignup} />
        </div>
      ) : isSignup && !crossClicked ? (
        <div className="login_page">
          <div className="cross-btn">
            <div
              className="hamburger"
              onClick={() => {
                setcrossClicked(true);
                setisSignin(false);
                setisSignup(false);
              }}
            >
              <div className="hamburger_lines"></div>
              <div className="hamburger_lines"></div>
            </div>
          </div>
          <Sign setisSignin = {setisSignin} setisSignup = {setisSignup}  ></Sign>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default LandingPage;
