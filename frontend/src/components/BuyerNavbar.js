import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const BuyerNavbar = ({setisSignin , setisSignup,setcrossClicked}) => {
  const [buyer,setBuyer] = useState(localStorage.getItem("userType"))
  useEffect(()=>{
    setBuyer(localStorage.getItem("userType"))
  })
  return (
    <div className="main-navbar" style={{heigth : '200px'}}>
          <div className="navbar-wrapper">
            <div className="logo"></div>
            <div className="navbar-links-div">
              {" "}
              <li className="navbar-links">Home</li>
              {
                buyer && <Link to ="/buyer/market">
                <li className="navbar-links">Market</li> 
                </Link>
              }
              <li className="navbar-links">Contact</li>

              {!buyer ? <>
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
              </>:<Link to = "/">
              <li
              className="navbar-links "
              onClick={() => {
                localStorage.clear()
              }}
            > Logout
                </li></Link>
            }
              
            </div>
          </div>
        </div>
  )
}

export default BuyerNavbar