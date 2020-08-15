import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

const items = [
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Insta_MainPage.png",
    altText: 'Slide 1',
    caption: 'See an organized stream of recently added photos from all users. You can also read photo descriptions and see the username and timestamp from the upload',
    captionHeader: "Main Page"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Insta_Profile.png",
    altText: 'Slide 2',
    caption: 'Here is a view of my specific profile. You can see my avatar and a brief bio on top, and below are all the photos that Ive uploaded',
    captionHeader: "Profile Page"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Insta_About2.png",
    altText: 'Slide 3',
    caption: '...',
    captionHeader: "About Page"
  }
];

class InstaCloneCarousal extends Component {
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
            className="carouselContainer insta"
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
            <Row style={{height: '600px'}}>
              <Col md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} style={{}}>
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
            <div className="instaPhotoContainer">
              <Card>
                <CardHeader
                  style={{
                    backgroundColor: '#F4F4F4',
                    color: 'dark',
                    fontSize: '18px',
                    fontWeight: '700',
                    opacity: '1'}} >
                    <img src="https://user-images.githubusercontent.com/25589910/90320472-bc026b00-df0f-11ea-9627-31a4bdd2f1d7.png" style={{ color: 'dark', width: "40px",  marginRight: "10px"}} />
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

export default InstaCloneCarousal;
