
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";

function FullView() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar NotTrans={true} />
      <br/>
      <br/>
      <br/>
      <br/>
      {/*<IndexHeader />*/}
      <div className="main">
        <SectionCarousel 
          title="Mariupol under near constant attack, Ukrainian official says..."
          description="Ukraine Take Shelter launched on March 3 and, within a week, more than 4,000 people had created listings offering shelter to Ukrainian refugees.  The website design is simple. Refugees enter the nearest city where they hope to flee.
          Taken against their will: Residents of Mariupol are being taken to Russia against their will by Russian forces, the Mariupol City Council said Saturday. Captured Mariupol residents were forcibly taken to camps where Russian forces checked their phones and documents, then redirected some of the residents to remote cities in Russia, the council said.
          Mariupol Mayor Vadym Boichenko compared Russia's actions to horrific events of World War II, when the Nazis forcibly captured people.
          Constant bombardment: A Ukrainian army commander told CNN people in Mariupol risk their lives each time they emerge from underground bunkers, and claimed the strategic port is facing the most intense fighting anywhere in the country. Major Denis Prokopenko, from the National Guard Azov Regiment, said air and land attacks on the city were now almost relentless.
          Bodies in the street: Prokopenko said people in the city were reluctant to leave their underground shelters even to get hold of essentials, meaning they were trying to drink less water and eat less food, only emerging to prepare hot meals. Basic services like gas, electricity and water, are all out in the city. Bodies are being left in the street because there is either no one left to collect them, or it is simply too dangerous to try.
          Theater attack: A new satellite image shows the Mariupol theater, which was bombed several days ago, almost completely destroyed, with just the western façade still standing. Still clearly visible in the photo is the Russian word for children painted by sheltering residents in large letters on the ground in front of the entrance. Hundreds of Ukrainians, including many children, were taking shelter inside the theater when it was attacked. Communications in the besieged city have been difficult for days and rescue work has been hampered by the danger of near-continuous shelling, according to reports from inside the city."
        />
        <DemoFooter />
      </div>
    </>
  );
}

export default FullView;
