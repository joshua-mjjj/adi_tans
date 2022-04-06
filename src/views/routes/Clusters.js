import React from "react";

// reactstrap components
import {
   Label,
   FormGroup,
   Input,
   Row,
   Col,
} from "reactstrap";

function Clusters(props) {
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
                  require("assets/img/faces/teamwork.png")
                    .default
                }
              />
            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
              <h6>
               <small style={{ fontWeight:'bold' , fontSize : '15px' }} >{props.name}</small> <br />
                <small>{props.project_type === 2 ? "Piggery" : null}</small>
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

export default Clusters;
