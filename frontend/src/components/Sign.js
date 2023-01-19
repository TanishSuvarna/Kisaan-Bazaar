import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useState } from "react";
import { customInstance } from "../helpers/axios";
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const options = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujurat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerela",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "NCT of Delhi",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

function Sign({ setisSignin, setisSignup }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    state: options[0],
    password: "",
  })
  const [query, setQuery] = useState("Buyer")
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const axios = customInstance();
      const payload = await axios.post(`/${query}/signup`, userInfo);
      localStorage.setItem("token", payload.data.token);
      localStorage.setItem("user", JSON.stringify(payload.data.user));
      navigate("/products")
    } catch {
      alert("Something Went Wrong");
    }
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      state: "",
      password: "",
    })

  };
  const handleChange = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    })
  }
  return (
    <MDBContainer fluid>
      <form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "600px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign Up</h2>

              <MDBCol md="6" className="mb-4">
                <h6 className="fw-bold">I am: </h6>
                <MDBRadio
                  required
                  name="inlineRadio"
                  id="inlineRadio1"
                  value="Buyer"
                  label="Buyer"
                  onClick={() => setQuery("Buyer")}
                  inline
                />
                <MDBRadio
                  name="inlineRadio"
                  id="inlineRadio2"
                  value="Seller"
                  label="Seller"
                  onClick={() => setQuery("Seller")}
                  inline
                />
              </MDBCol>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    required
                    label="First Name"
                    size="lg"
                    id="form1"
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleChange}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    required
                    label="Last Name"
                    size="lg"
                    id="form2"
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4 w-100"
                required
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                required
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
              />

              <MDBInput
                wrapperClass="mb-4"
                required
                label="Address"
                size="lg"
                id="form1"
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}

              />

              <MDBCol>
                <div className='fw-normal text-start me-2'>
                  Select Region:
                  {/* <h6 className='fw-normal text-start me-2' >Select your region</h6> */}
                  <select className='mb-4 py-2 px-4 ms-3 square border border-grey'
                    value={userInfo.state}
                    name="state"
                    onChange={handleChange}>
                    {options.map((value, index) => (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    ))}
                  </select>

                </div>
              </MDBCol>

              {/* <MDBRow>
                <h6>Select your region</h6>
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </MDBRow> */}

              <div className="mb-4 my-3">
                <MDBCheckbox
                  name="flexCheck"
                  required
                  value=""
                  id="flexCheckDefault"
                  label="I Agree all terms and condition"
                />
              </div>

              <MDBBtn size="lg" type="submit">
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Sign;
