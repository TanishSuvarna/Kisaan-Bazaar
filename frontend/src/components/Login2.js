import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../css/Login2.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login2(setisSignin, setisSignup, setcrossClicked) {
  return (
    <MDBContainer fluid>
      <form>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Login</h2>

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

                {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}
                <p className="small mb-3 pb-lg-2">
                  <a class="text-dark-50" href="#!">
                    Forgot password?
                  </a>
                </p>

                <MDBBtn size="lg">Login</MDBBtn>

                <div>
                  <hr />
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a
                      class="text-dark-50 fw-bold "
                      onClick={() => {
                        setisSignin(false);
                        setisSignup(true);
                        setcrossClicked(false);
                        alert("hello");
                      }}
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Login2;
