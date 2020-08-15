import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';


const items = [
  {
    src: "https://user-images.githubusercontent.com/25589910/36452888-2c7f27dc-1664-11e8-8a1c-c72dfae1e987.png",
    altText: 'Slide 1',
    caption: 'View the real-time market prices for BTC, ETH, and LTC. Also take a look at the most recently published articles related to crypto',
    captionHeader: "Main Page"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/36452959-660a725e-1664-11e8-87a1-7af8325fa510.png",
    altText: 'Slide 2',
    caption: 'Super user friendly dashboard for navigating the mobile app',
    captionHeader: "Dashboard"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/36453122-f9fe721c-1664-11e8-9f5e-fbad65b9048a.png",
    altText: 'Slide 3',
    caption: 'Check out the daily, weekly, monthly, and year-to-date changes in crpto prices. Also see what people are saying on twitter',
    captionHeader: "Crypto Page (Top)"
  },
  {
  src: "https://user-images.githubusercontent.com/25589910/36453231-5cffa066-1665-11e8-92dc-93a52f8a3185.png",
    altText: 'Slide 4',
    caption: 'Curated RSS feed that brings together news from across the entire web. Also notice the Buy and Sell button on the bottom',
    captionHeader: "Crypto Page (Bottom)"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/36451518-4cde9ef4-165f-11e8-85fc-756201ec4d57.png",
    altText: 'Slide 6',
    caption: 'The Buy and Sell buttons located on the crypto pages direct you here. The page from which you navigated here will dictate the crypto denominated wallet that will be used to buy or sell',
    captionHeader: "Buying/Selling"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/36450743-e8b2c056-165c-11e8-99c8-a8133c3a8e12.png",
    altText: 'Slide 5',
    caption: 'Shows current balance in USD, BTC, ETH, and LTC wallets, as well as most recent 25 transactions and the associated details',
    captionHeader: "Wallets"
  },
  {
    src: "https://user-images.githubusercontent.com/25589910/36451827-5b7a8ef4-1660-11e8-8b79-3dbe687356b6.png",
    altText: 'Slide 7',
    caption: 'Easily transfer crypto currency to a friend, with just their email. No need to know their full wallet address',
    captionHeader: "P2P"
  }
];

class CoinStacheCarousal extends Component {
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
            <Row style={{height: '620px'}}>
              <Col md={{size: 5, offset: 4}} sm={{size: 10, offset: 1}} style={{}}>
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
            <div className="photoContainer">
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


export default CoinStacheCarousal;
