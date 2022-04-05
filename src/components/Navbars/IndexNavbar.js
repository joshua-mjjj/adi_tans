
import React from "react";
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

function IndexNavbar({ NotTrans }) {
  const [navbarColor, setNavbarColor] = React.useState(NotTrans ? "navbar" : "navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    if(!NotTrans){
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
            target="_blank"
            title="Coded by Creative Tim"
          >
            Adi-tans
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
                      Adi-tans Home
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => window.location.href = "/index"}
                    >
                      Home
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
                    Login
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <DropdownItem header tag="span">
                      Adi-tans Login
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => window.location.href = "/login"}
                    >
                      Login
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
                    Register
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <DropdownItem header tag="span">
                      Adi-tans Register
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => window.location.href = "/register"}
                    >
                      Register
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <div style={{
              marginTop: '17px',
              display: 'flex'
            }} >
              <Input style={{
                 borderRadius: '25px',
                 width: '300px',
                 height: '35px',
                 paddingLeft: '20px',
                 marginLeft: '10px'
               }} 
                  placeholder="Search news..." />
              <div style={{
                 marginTop: '12px',
                 marginLeft: '12px',
               }} >
                  <i class="nc-icon nc-zoom-split" />
              </div>
            </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
