import React from "react";
import { Container } from "reactstrap";


function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/green.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 style={{ 
                color: 'white', 
                fontWeight: 'bold'
            }} className="">WELCOME TO AD-DITANS</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              TO EMPOWER COMMUNITIES
            </h2>
            <h2 style={{ color: 'white' }}>
            <p style={{ fontWeight: 'bold' }}>
              So many people have the passion to invest in various projects but lack enough
              capital and the experience to do so, therefore, end up making losses in poor 
              decision making and unguided investment planning thus failing to startup investments 
              in particular fields to a lack of adequate capital; thus Ad-ditans
            </p>
            </h2>
          </Container>
        </div>
        
      </div>
    </>
  );
}

export default IndexHeader;
