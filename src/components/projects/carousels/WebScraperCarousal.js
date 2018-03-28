import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';


const items = [
  {
    src: "https://user-images.githubusercontent.com/25589910/37607795-60a65b46-2b6f-11e8-869c-0cb7f77b2cb4.png",
    altText: 'Slide 1',
    caption: 'Test Test',
    captionHeader: "Main Page"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/37607846-72dbdd2c-2b6f-11e8-8416-e5c16d0ad97f.png",
    altText: 'Slide 2',
    caption: '...',
    captionHeader: "Scrape Results (Top Half)"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/37607867-7ef82ed0-2b6f-11e8-99cd-9e1433b398ab.png",
    altText: 'Slide 3',
    caption: '...',
    captionHeader: "Scrape Results (Bottom Half)"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/37607886-88395fbe-2b6f-11e8-8c92-75f72719afd5.png",
    altText: 'Slide 4',
    caption: '...',
    captionHeader: "Scrape History"
  }
];

class WebScraperCarousal extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

onExiting() {
  this.animating = true;
}
onExited() {
  this.animating = false;
}
next() {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
  this.setState({ activeIndex: nextIndex });
}
previous() {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
  this.setState({ activeIndex: nextIndex });
}
goToIndex(newIndex) {
  if (this.animating) return;
  this.setState({ activeIndex: newIndex });
}

render() {
  const { activeIndex } = this.state;

  const slides = items.map((item) => {
      return (
          <CarouselItem
            className="carouselContainer scrape"
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
            <Row style={{height: '700px'}}>
              <Col md={{size: 12, offset: 0}} sm={{size: 10, offset: 1}} style={{}}>
                <img src={item.src} alt={item.altText} />
              </Col>
            </Row>
            <Row>
              <Col md={{size: 12, offset: 0}}>
                <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.captionHeader} />
              </Col>
            </Row>
          </CarouselItem>
      );
    });

    return (
      <Container>
        <Row>
          <Col md={{size: 10, offset: 1}}>
            <div className="eatPhotoContainer">
              <Card>
                <CardHeader
                    style={{
                      backgroundColor: '#F4F4F4',
                      color: 'dark',
                      fontSize: '18px',
                      fontWeight: '700',
                      opacity: '1'}} >
                  <img src="https://s3.amazonaws.com/aw-personal-website-images/Photos_logo.png" style={{ color: 'dark', width: "40px",  marginRight: "10px"}} />
                    Photos
                </CardHeader>

                <CardBlock style={{ padding: '0px', opacity: '1' }}>
                  <Row>
                    <Col md="12">
                      <div className="carouselContainer">
                        <Carousel
                          activeIndex={activeIndex}
                          next={this.next}
                          previous={this.previous}
                          interval={20000}
                          >
                          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} style={{ }} />
                          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                      </div>
                    </Col>
                  </Row>
                </CardBlock>

              </Card>
            </div>

          </Col>
        </Row>
      </Container>
    );
  }
}


export default WebScraperCarousal;
