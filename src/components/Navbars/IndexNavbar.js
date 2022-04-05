import React from "react";
import { connect } from "react-redux";

// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  InputGroup, 
  InputGroupAddon, 
  InputGroupText, 
  Input
} from "reactstrap";

function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState(props.NotTrans ? "navbar" : "navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    if(!props.NotTrans){
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
        }
      };

      window.addEventListener("scroll", updateNavbarColor);

      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    }
    
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title=""
          >
            Ad-ditans
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-md-center"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
              <NavItem>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="dropdownMenuButton"
                    nav
                    onClick={(e) => e.preventDefault()}
                    role="button"
                  >
                    Home
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <DropdownItem header tag="span">
                      Ad-ditans Home
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => window.location.href = "/index"}
                    >
                      Home
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => window.location.href = "/profile-page"}
                    >
                      Dashboard
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="dropdownMenuButton"
                    nav
                    onClick={(e) => e.preventDefault()}
                    role="button"
                  >
                    {props.auth.loggedIn ? "Account" : "Login" }
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <DropdownItem header tag="span">
                      {props.auth.loggedIn ? "Adi-tans Account" : "Adi-tans Login" }
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => {
                        if(props.auth.loggedIn){
                          window.location.href = "/profile-page"
                        }else { 
                          window.location.href = "/login"
                        }
                      }}
                    >
                      {props.auth.loggedIn ? "Account" : "Login" }
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="dropdownMenuButton"
                    nav
                    onClick={(e) => e.preventDefault()}
                    role="button"
                  >
                    {props.auth.loggedIn ? "Logout" : "Register" }
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <DropdownItem header tag="span">
                      {props.auth.loggedIn ? "Ad-ditans Logout" : "Ad-ditans Register" }
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => window.location.href = "/register"}
                      onClick={(e) => {
                        if(props.auth.loggedIn){
                          localStorage.removeItem("token")
                          window.location.href = "/index"
                        }else { 
                          window.location.href = "/register"
                        }
                      }}
                    >
                      {props.auth.loggedIn ? "Logout" : "Register" }
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToProps, null)(IndexNavbar);

