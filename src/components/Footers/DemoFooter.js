
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/index"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                >
                  Register
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, all rights reserved{" "} Global news
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
