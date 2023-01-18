import "../css/SellerProfile.css";
import React from "react";
import SellerNavbar from "./SellerNavbar";
const SellerProfile = () => {
  return (
    <>
    <SellerNavbar/>
      <div className="seller-profile-container">
        <div className="seller-container-wrapper">
          <div className="main-profile-div">
            <div className="Profile-pic"></div>
            <div className="Profile-details">
                <div>
                <label htmlFor="">UserName:</label>
                <label htmlFor="">Email:</label>
                <label htmlFor="">Rating:</label>
                <label htmlFor="">Address:</label>
                </div>
                <div>
                
              <p>Pratham Upadhyay</p>
              <p>Pratham20@gmail.com</p>
              
              <p>4.5</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
                aut?
              </p>
                </div>
           
            
             
            </div>

          </div>
          <div className="profile-achivements-div">
          <div className="profile-achivements"></div>
          <div className="profile-achivements"></div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
