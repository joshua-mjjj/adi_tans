
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">About Global News Plartform</h2>
              <br />
              <p className="description">
                Global news is a world class news plartform that provides you with the instant
                news Updates at your disposal all the time. We are committed to Serving our readers
                with all news concerning current affairs, Business Updates, Weather Updates, Polictics
                and much more you don't want to miss out on.
    
              </p>
              <br />
              <Button
                className="btn-round"
                color="danger"
                href="/nucleo-icons"
                target="_blank"
              >
                Get started
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                Weather Updates
              </Button>
            </Col>
            <Col lg="6" md="12">
              
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
