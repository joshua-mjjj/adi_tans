
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/DemoFooter.js";

// index sections
import SectionCarousel from "./sections/SectionCarousel.js";
import SectionNucleoIcons from "./sections/SectionNucleoIcons.js";
import Landing from "views/routes/LandingPage.js";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <Landing />
        <SectionNucleoIcons />
        <Footer />
      </div>
    </>
  );
}

export default Index;
