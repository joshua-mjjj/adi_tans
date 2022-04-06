import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";

import { useDispatch, useSelector } from "react-redux";
import { register } from "_actions/user.actions";
import { useHistory } from "react-router-dom";
import Spinner from "components/Spinner";
import { MenuItem, Select } from "@mui/material";

const userCredentials = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  phone_number: "",
  password: "",
};

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInitials, setUserInitials] = React.useState(userCredentials);
  const { register_loading } = useSelector((state) => state.registration);
  console.log(register_loading);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    // console.log(userInitials);
    setUserInitials({
      ...userInitials,
      [name]: value,
    });
  };

  const handleClearForm = () => {
    setUserInitials(userCredentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInitials) {
      if (
        userInitials.first_name &&
        userInitials.last_name &&
        userInitials.email &&
        userInitials.username &&
        userInitials.phone_number &&
        userInitials.password
      ) {
        dispatch(
          register(
            userInitials.first_name,
            userInitials.last_name,
            userInitials.email,
            userInitials.username,
            userInitials.password,
            userInitials.phone_number,
            history
          )
        );
      }
    } else {
      // send message or error to user
    }
    handleClearForm();
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/plant.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card style={{ width : '600px' }} className="card-register ml-0 mr-0">
                <h3 className="title mx-auto">Ad-ditans Register</h3>
                <Form className="register-form" onSubmit={handleSubmit}>
                   <Row>
                    <Col md="6">
                    <label>First Name</label>
                      <Input
                        placeholder="First Name"
                        type="text"
                        value={userInitials.first_name}
                        onChange={handleInputChange}
                        name="first_name"
                      />
                      </Col>
                  <Col md="6">
                     <label>Last Name</label>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        value={userInitials.last_name}
                        onChange={handleInputChange}
                        name="last_name"
                      />
                      </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                     <label>Username</label>
                      <Input
                        placeholder="Username"
                        type="text"
                        value={userInitials.username}
                        onChange={handleInputChange}
                        name="username"
                      />
                      </Col>
                  <Col md="6">
                     <label>Email</label>
                      <Input
                        placeholder="Email"
                        type="text"
                        value={userInitials.email}
                        onChange={handleInputChange}
                        name="email"
                      />
                      </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <label>Contact</label>
                        <Input
                          placeholder="Contact"
                          type="tel"
                          value={userInitials.phone_number}
                          onChange={handleInputChange}
                          name="phone_number"
                        />
                      </Col>
                      <Col md="6">
                     <label>Password</label>
                        <Input
                          placeholder="Password"
                          type="password"
                          value={userInitials.password}
                          onChange={handleInputChange}
                          name="password"
                        />
                      </Col>
                    </Row>
                    <Row>
                    <Col md="12">
                      <label>Join as: </label>
                        <Select
                            onChange={handleInputChange}
                            disableUnderline
                            displayEmpty
                            fullWidth
                            value={userInitials.account_type}
                            name="account_type"
                            style={{
                                  fontSize: '13px',
                                  color: 'white',
                                  border: '1px solid #cfd7de',
                                  height: '33px',
                                  borderRadius: '5px',
                            }}
                          >
                      <MenuItem value="normal_user">Normal User</MenuItem>
                      <MenuItem value="premium_normal_user">Premium User</MenuItem>
                    </Select>
                      </Col>
                    </Row>
                  <Button block className="btn-round" color="white">
                    Register
                    {register_loading && <Spinner />}
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()} <i className="fa fa-heart heart" />{" "}
            Ad-ditans
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
