import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';


const items = [
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Eat_MainPage.png",
    altText: 'Slide 1',
    caption: 'Browse through some of the recently added restaurants, or login and post some reviews of your own',
    captionHeader: "Home Page"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Eat_Login.png",
    altText: 'Slide 2',
    caption: 'Easily register and login using this responsive form',
    captionHeader: "Login Zoom"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Eat_RestShowPage.png",
    altText: 'Slide 3',
    caption: 'View the restaurant details on top (cuisine, address, average review, and # of reviews). Below you can view/read the reviews, as well as post a review of your own (if you are logged in)',
    captionHeader: "Restaurant Show Page"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Eat_NewRest.png",
    altText: 'Slide 4',
    caption: 'Dont see a restaurant on our application? Add it with this super simple form!',
    captionHeader: "Add a Restautant"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Eat_PostReview.png",
    altText: 'Slide 5',
    caption: 'Does this restaurant have the best burger youve ever had? Let everyone know!',
    captionHeader: "Write a Review"
  },
  {
    src: "https://s3.amazonaws.com/aw-personal-website-images/Eat_ProfilePage.png",
    altText: 'Slide 6',
    caption: 'View an organized list of the restaurants that youve added to the app`s database. Also take a look at the various reviews youve left (and the rating #s you given)',
    captionHeader: "Profile Page"
  }
];

class EatReviewCarousal extends Component {
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
            className="carouselContainer eat"
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
            <Row style={{height: '610px'}}>
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
          <Col md={{size: 10, offset: 1}} sm={{size: 12}}>
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


export default EatReviewCarousal;
