import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Row,
  Col,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

function AddProfile() {
  
//   {
//   "id_name": "Kampala Investemnts",
//   "investment_plan": 500000,
//   "latitude": 0.3878565,
//   "longitude": 32.9765,
//   "project_type": 1,
//   "owner": 12
// }

  return (
    <>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Create a profile</h2>
            <Form className="contact-form">
              <Row>
                <Col md="6">
                  <label>Profile Identification Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Investment Plan</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <label>Profile Type</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                  </InputGroup>
                </Col>
              </Row>
              
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button className="btn-fill" color="danger" size="lg">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>        
    </>
  );
}

export default AddProfile;
