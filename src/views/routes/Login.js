import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";

import { useDispatch } from "react-redux";
import { login } from "_actions/user.actions";

const userCredentials = {
  username: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
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
    if (userInitials) {
      if (userInitials.username && userInitials.password) {
        dispatch(login(userInitials.username, userInitials.password));
      }
    }else{
      // Show user some message asking them to enter all required information correctly
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
            "url(" + require("assets/img/goldenboy.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Ad-ditans Login</h3>
                <Form className="register-form" onSubmit={handleSubmit}>
                  <label>Username</label>
                  <Input
                    placeholder="Username"
                    type="text"
                    value={userInitials.username}
                    onChange={handleInputChange}
                    name="username"
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={userInitials.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                  <Button block className="btn-round" color="grey">
                    Login
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

export default Login;
