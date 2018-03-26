import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

const items = [
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Insta_MainPage.png",
    altText: 'Slide 1',
    caption: 'Main...',
    captionHeader: "Main Page"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Insta_Profile.png",
    altText: 'Slide 2',
    caption: 'profile....',
    captionHeader: "Profile Page"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Insta_About2.png",
    altText: 'Slide 3',
    caption: 'about...',
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
          className="carouselContainer coin"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.captionHeader} />
        </CarouselItem>
      );
    });

    return (
        <Card>
          <CardHeader style={{ backgroundColor: '#d9edf7'}}>
            Photos
          </CardHeader>
          <CardBlock>
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
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
                </div>
              </Col>

            </Row>
          </CardBlock>
        </Card>
    );
  }
}


export default InstaCloneCarousal;
