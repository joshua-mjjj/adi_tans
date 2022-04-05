import React from "react";

// reactstrap components
import {
   Label,
   FormGroup,
   Input,
   Row,
   Col,
} from "reactstrap";

function ProfilePage() {
  return (
    <>
      <div>
      	 <li>
          <Row>
            <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={
                  require("assets/img/faces/clem-onojeghuo-2.jpg")
                    .default
                }
              />
            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
              <h6>
                Flume <br />
                <small>Musical Producer</small>
              </h6>
            </Col>
            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
              <FormGroup check>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue=""
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </li>
      </div>
    </>
  );
}

export default ProfilePage;
