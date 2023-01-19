import React from "react";
import { useState ,useEffect } from "react";
// import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
// import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// enableRipple(true);
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import { customInstance } from "../helpers/axios";

function SellProductForm({setter ,setisCrossed , setisAddProduct}) {
  const [productInfo , setProductInfo] = useState({
    name:"",
    quantity:"",
    basePrice:"",
    description:"",
    image:"",
  })
  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const{name , quantity , image , description , basePrice} = productInfo;
    if(!name || !quantity || !description || !basePrice) return alert("Please Enter Valid Details");
    try{
      const axios = customInstance()
      const form = new FormData();
    form.append('name', name);
    form.append('quantity', quantity);
    form.append('image', image);
    form.append('description', description);
    form.append('basePrice', basePrice);
    const add = await axios.post("/seller/addProduct" , form);
    console.log(add);
    setter((prev) =>{
      return [...prev , add.data.newProduct]
    });
    }
    catch{
      return alert("Sorry Something Went Wrong");
    }
    alert("Product Added Success");
    setProductInfo({name:"",
    quantity:"",
    basePrice:"",
    description:"",
    image:""})
    setisCrossed(true);
    setisAddProduct(true);
  }
  const handleChange= (e) => {
    setProductInfo((prev) => {
      if(e.target.name === "image"){
        return {...prev , [e.target.name] : e.target.files[0]};
      }
      else return {...prev , [e.target.name] : e.target.value};})
  }
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="px-4">
          <h1 class="text-white mb-2">Add Product</h1>
          
          <MDBCard>
            <form onSubmit={handleSubmit}>
            <MDBCardBody className="px-4">
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Product name</h6>
                </MDBCol>

                <MDBCol md="5" className="pe-5">
                  <MDBInput label="Name" name = "name" value = {productInfo.name} onChange ={handleChange} size="lg" id="form1" type="text" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Base Price(in Rs.)</h6>
                </MDBCol>

                <MDBCol md="5" className="pe-5">
                  <MDBInput  name = "basePrice" value = {productInfo.basePrice} onChange ={handleChange}label="Base Price" id="typeNumber" type="number" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Quantity(in Kg)</h6>
                </MDBCol>

                <MDBCol md="5" className="pe-5">
                  <MDBInput  name = "quantity" value = {productInfo.quantity} onChange ={handleChange} label="Quantity" id="typeNumber" type="number" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Product Description</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea  name = "description" value = {productInfo.description} onChange ={handleChange}
                    label="Description"
                    id="textAreaExample"
                    rows={3}
                  />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Upload Product Image</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBFile name ="image" onChange = {handleChange} size="lg" id="customFile" />
                  <div className="small text-muted mt-2">
                    Upload your Product Image. Max file size 50 MB
                  </div>
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn type = "submit" className="my-4" size="lg">
                ADD
              </MDBBtn>
            </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SellProductForm;
