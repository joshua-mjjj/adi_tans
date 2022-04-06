import React from "react";
import { connect, useSelector } from "react-redux";
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import Chip from "@mui/material/Chip";
import Icon from "@mui/icons-material/CheckCircleOutline";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

import { loadUser } from "_actions/user.actions.js";

import ProfileItem from "./ProfileItem.js";
import AddProfile from "./AddProfile.js";
import AddProfileMentor from "./AddProfileMentor.js";

function ProfilePage(props) {
  const [activeTab, setActiveTab] = React.useState("1");
  const { user } = useSelector((state) => state.authentication);
  const mentors = user?.mentor_profiles;
  const profiles = user?.profiles;
  console.log(mentors);
  console.log(profiles);
  //  React.useEffect(() => {
  //   if(props.auth.loggedIn) {
  //     props.loadUser();
  //   }
  // }, [props, props.auth.loggedIn]);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        {props.auth.user !== null ? (
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/joe-gardner-2.jpg").default}
                />
              </div>
              <div className="name">
                {props.auth.user.account_type === "normal_user" ? (
                  <Chip
                    style={{
                      color: "green",
                      border: "1px solid green",
                    }}
                    label="Normal user"
                    // onClick={handleClick}
                    icon={
                      <Icon
                        style={{ color: "green" }}
                        height="23px"
                        width="23px"
                        alt=""
                      />
                    }
                  />
                ) : null}
                {props.auth.user.account_type === "premium_normal_user" ? (
                  <Chip
                    style={{
                      color: "blue",
                      border: "1px solid blue",
                    }}
                    label="Premium user"
                    // onClick={handleClick}
                    icon={
                      <Icon
                        style={{ color: "blue" }}
                        height="23px"
                        width="23px"
                        alt=""
                      />
                    }
                  />
                ) : null}
                {props.auth.user.account_type === "mentor" ? (
                  <Chip
                    style={{
                      color: "red",
                      border: "1px solid red",
                    }}
                    label="Mentor"
                    // onClick={handleClick}
                    icon={
                      <Icon
                        style={{ color: "red" }}
                        height="23px"
                        width="23px"
                        alt=""
                      />
                    }
                  />
                ) : null}
                <h4 className="">
                  {props.auth.user.username} <br />
                </h4>
                <h6 className="description">{props.auth.user.email}</h6>
              </div>
            </div>
            {/*<Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button>
            </Col>
          </Row>*/}
            <br />
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Profiles</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Add Profiles</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            {/* Tab panes */}
            <TabContent className="following" activeTab={activeTab}>
              <TabPane tabId="1" id="follows">
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">
                      <ProfileItem
                        mentors={mentors}
                        profiles={profiles}
                        account_type={props.auth.user.account_type}
                      />
                      <hr />
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <div className="">
                  {props.auth.user.account_type === "normal_user" ||
                  props.auth.user.account_type === "premium_normal_user" ? (
                    <AddProfile />
                  ) : null}
                  {props.auth.user.account_type === "mentor" ? (
                    <AddProfileMentor />
                  ) : null}
                </div>
              </TabPane>
            </TabContent>
          </Container>
        ) : null}
      </div>
      <DemoFooter />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToProps, { loadUser })(ProfilePage);
