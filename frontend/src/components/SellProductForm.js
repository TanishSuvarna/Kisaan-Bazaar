import React from "react";

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

function SellProductForm() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="px-4">
          <h1 class="text-white mb-2">Add Product</h1>

          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Product name</h6>
                </MDBCol>

                <MDBCol md="5" className="pe-5">
                  <MDBInput label="Name" size="lg" id="form1" type="text" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Base Price(in Rs.)</h6>
                </MDBCol>

                <MDBCol md="5" className="pe-5">
                  <MDBInput label="Base Price" id="typeNumber" type="number" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />
              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Quantity(in Kg)</h6>
                </MDBCol>

                <MDBCol md="5" className="pe-5">
                  <MDBInput label="Quantity" id="typeNumber" type="number" />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6 className="mb-0">Product Description</h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea
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
                  <MDBFile size="lg" id="customFile" />
                  <div className="small text-muted mt-2">
                    Upload your Product Image. Max file size 50 MB
                  </div>
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className="my-4" size="lg">
                send application
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SellProductForm;
