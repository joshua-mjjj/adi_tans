
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 style={{ 
                color: 'white', 
                fontWeight: 'bold'
            }} className="">Welcome to Adi-tans</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Get connected to agricultural mentors instantly
            </h2>
          </Container>
        </div>
        
      </div>
    </>
  );
}

export default IndexHeader;
