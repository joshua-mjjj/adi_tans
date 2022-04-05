import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";

import { useDispatch } from "react-redux";
import { register } from "_actions/user.actions";
import { useHistory } from "react-router-dom";

const userCredentials = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  username: "",
  phone_number: "",
};

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInitials, setUserInitials] = React.useState(userCredentials);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    console.log(userInitials);
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
    dispatch(register(userInitials, history));
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
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Ad-ditans Register</h3>

                <Form className="register-form" onSubmit={handleSubmit}>
                  <label>First Name</label>
                  <Input
                    placeholder="First Name"
                    type="text"
                    value={userInitials.first_name}
                    onChange={handleInputChange}
                    name="first_name"
                  />
                  <label>Last Name</label>
                  <Input
                    placeholder="Last Name"
                    type="text"
                    value={userInitials.last_name}
                    onChange={handleInputChange}
                    name="last_name"
                  />
                  <label>Username</label>
                  <Input
                    placeholder="Username"
                    type="text"
                    value={userInitials.username}
                    onChange={handleInputChange}
                    name="username"
                  />
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    value={userInitials.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                  <label>Contact</label>
                  <Input
                    placeholder="Contact"
                    type="tel"
                    value={userInitials.phone_number}
                    onChange={handleInputChange}
                    name="phone_number"
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={userInitials.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                  <Button block className="btn-round" color="white">
                    Register
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
