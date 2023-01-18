import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useState } from "react";
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

function Sign(setisSignin, setisSignup) {
  const [selected, setSelected] = useState(options[0]);
  const submit = () => {
    console.log(selected);
  };
  return (
    <MDBContainer fluid>
      <form>
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
                  name="inlineRadio"
                  id="inlineRadio1"
                  value="Buyer"
                  label="Buyer"
                  inline
                />
                <MDBRadio
                  name="inlineRadio"
                  id="inlineRadio2"
                  value="Seller"
                  label="Seller"
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
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                required
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBCol>
                <div className='fw-normal text-start me-2'>
                  Select your region
                  {/* <h6 className='fw-normal text-start me-2' >Select your region</h6> */}
                  <select className='mb-4 py-1 px-3 ms-2 square border border-grey'
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}>
                    {options.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>

                </div>
              </MDBCol>

              <div className="mb-4 my-3">
                <MDBCheckbox
                  name="flexCheck"
                  required
                  value=""
                  id="flexCheckDefault"
                  label="I Agree all terms and condition"
                />
              </div>

              <MDBBtn size="lg" type="submit" onClick={submit}>
                submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Sign;
