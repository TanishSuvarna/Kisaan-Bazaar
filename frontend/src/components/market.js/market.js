import React, { Fragment, useEffect ,useState} from "react";
import ReactStars from "react-rating-stars-component";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../../css/market.css";
import wheat from "../../img/wheat.jpg";
import corn from "../../img/corn.jpg";
import jowar from "../../img/jowar.jpg";
import rice from "../../img/rice.jpg";
import { Navigate, useParams } from "react-router-dom";
import { customInstance } from "../../helpers/axios";
import BuyerNavbar from "../BuyerNavbar";
import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Market = () => {
  
  const {category} = useParams();
  const[allProducts , setAllProducts ] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const axios = customInstance();
    const func = async ()=>{
      try{
        const activeProducts = await axios.get(`/buyer/activeProducts/${category}`);
        setAllProducts(activeProducts);
        console.log(activeProducts)
      }
      catch(err){
        console.log(err)
      }
    }
    
    func();
  },[])
  
  return (
    <>
      <BuyerNavbar></BuyerNavbar>
      <Fragment>
        <h1 className="text-danger fw-bold text-center mb-5">
          Welcome to Market Page
        </h1>
        <div className="market">
          <MDBContainer>
           <section id="wheat" className="wheat-section mb-8">
            <div className="m-container">
                <div className="section-header">
                  <div className="thumbnail ms-2">
                    <img
                      src="https://i.pinimg.com/736x/52/1a/f9/521af9cd92d33e0cf4afffdd091d591e.jpg"
                      alt="Wheat Image"
                    />
                  </div>
                  <div className="title">
                    <h1>{category}</h1>
                  </div>
                </div>
                {/* <div className="row1"> */}
                  <div className = "row1">
                  {allProducts.data && allProducts.data.allProducts && allProducts.data.allProducts.length > 0  && 
                    allProducts.data.allProducts.map((product , key) => (
                      <div className="card mb-3"  key = {key}>
                    <div className="market-item px-2">
                      <div className="item-img">
                        <img src= {product.image} alt="" />
                        <div className="rating d-flex ms-1">
                          <ReactStars
                            count={5}
                            size={24}
                            value ={parseInt(product.owner.rating)}
                            emptyIcon={<i className="far fa-star"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                      <div className="item-content">
                        <h6 className="title fw-bold">Seller - {product.owner.firstName + product.owner.lastName}</h6>
                        <div className="bid-area">
                          <div className="Amt" style={{ color: "limegreen" }}>
                            <div className="current">Quantity</div>
                            <div className="amt">{product.quantity}</div>
                          </div>
                          <div style={{ color: "red" }}>
                            <div className="buy">Hurry Up</div>
                            <div className="buy">Buy now</div>
                          </div>
                        </div>
                        <div className="countdown d-flex my-2">
                          <div className="timer">Timer</div>
                          <div className="total-bit">Current Bid {product.currentBid ? product.currentBid :  '0'} </div>
                        </div>
                        <MDBBtn onClick = {() => navigate(`/buyer/market/product/${product._id}`)}style={{ margin: "8px 100px" }}>
                          Submit A Bid
                        </MDBBtn>
                      </div>
                    </div>
                  </div>
                    ))
                  } 
                  </div>
                </div>
              {/* </div> */}
              
            </section> 
            
          </MDBContainer>
        </div>
      </Fragment>
    </>
  );
};

export default Market;
