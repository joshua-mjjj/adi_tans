
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/soroush-karimi.jpg").default,
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("assets/img/federico-beccari.jpg").default,
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("assets/img/joshua-stannard.jpg").default,
    altText: "Here it is",
    caption: "Here it is",
  },
];

function SectionCarousel(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div style={{ marginBottom: '0px', paddingBottom: '0px' }}  id="carousel">
        <Container>
            <h2 style={{ 
                  color : 'black', 
                  fontWeight: "800",
                  // marginRight: "320px", 
                  marginBottom: "8px" 
              }} className="presentation-subtitle text-center">
              {props.title}
            </h2>
          <Row >
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
              <p style={{ 
                    color : 'black', 
                    fontWeight: "200",
                    fontSize: "20px",
                    // marginRight: "330px", 
                    marginBottom: "8px" 
                }} className="presentation-subtitle text-center">
                {props.description}
              </p>
            </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;