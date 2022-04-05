import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";

import { useDispatch } from "react-redux";

import { login } from "_actions/user.actions";
<<<<<<< HEAD
import { loadUser } from "_actions/user.actions.js";
=======
import Spinner from "components/Spinner";
>>>>>>> Update:Spinner

const userCredentials = {
  username: "",
  password: "",
};

function Login(props) {
  const dispatch = useDispatch();
  const [userInitials, setUserInitials] = React.useState(userCredentials);
  const { login_loading } = useSelector((state) => state.authentication);
  console.log(login_loading);

  React.useEffect(() => {
    if(props.auth.loggedIn) {
      props.loadUser();
    }
  }, [props, props.auth.loggedIn]);

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
      if (userInitials.username && userInitials.password) {
        dispatch(login(userInitials.username, userInitials.password));
      }
    } else {
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

<<<<<<< HEAD
    if (props.auth.loggedIn) {
    // if (props.auth.user !== null) {
        return <Redirect to="/profile-page" />;
    }
=======
  console.log(props.auth.loggedIn);
  if (props.auth.loggedIn) {
    // if (props.auth.user !== null) {
    return <Redirect to="/profile-page" />;
  }
>>>>>>> Update:Spinner

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
                    Login {login_loading && <Spinner />}
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

const mapStateToProps = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToProps, { loadUser })(Login);
