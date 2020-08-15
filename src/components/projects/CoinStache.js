import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody, Collapse } from 'reactstrap';

import CoinStacheCarousal from './carousels/CoinStacheCarousal';

class CoinStache extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  toggleDescription() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
render() {
  return(
      <Container>

        <Row>
          <Col md="12" style={{textAlign: 'center'}}>
            <h1>Coin'Stache<h5>Cryptocurrency Made Easy</h5></h1>
          </Col>
        </Row>

        <Row>
          <Col md="12">
           <Card style={{borderColor: '#DFDFE1'}}>
             <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '.7'}}>
               <img src="https://user-images.githubusercontent.com/25589910/90320659-f3254c00-df10-11ea-9d1c-a26da66210cc.png" style={{ color: 'dark', height: "30px",  marginRight: "15px"}} />
                DESCRIPTION
               <Button
                 style={{opacity: '1', marginLeft: '20px', borderRadius: '5px', fontSize: '12px', fontWeight: '700'}}
                 color="success"
                 size="sm"
                 onClick={this.toggleDescription}>
                 { this.state.collapse ? "Hide Full" : "Show Full" }
               </Button>
             </CardHeader>

             <CardBlock>
               <Collapse isOpen={this.state.collapse}>
                 <CardText>
                   <Row style={{margin: '5px 5px 15px'}}>
                     The first and most significant cryptocurrency, BitCoin, was created and made available for use in early 2009. The digital asset was designed to work as an entirely new medium of exchange. BitCoin utilizes a decentralized, distributed ledger, called a Blockchain. All of the blockchain data is linked and secured using cryptography. Blockchain technology is arguably the most powerful feature of crptocurrency, and is what differentiates itself from traditional currencies that are centrally managed. In the decade since it's creation, cryptocurrency has rapidly integrated itself into the global financial ecosystem, and facilitates a growing percentage of overall transactions
                   </Row>

                   <Row style={{margin: '5px 5px 15px'}}>
                     Given the larger and larger role that cryptocurrency is playing in consumer behavior, my team and I decided to build a mobile application that helps users organize their various crypto-denominated wallets, and also brings together the most relevent stream of crypto related news and user-generated content
                   </Row>

                   <Row style={{margin: '5px 5px 15px'}}>
                     Upon successful login to the app, users are brought to the home page, where they can see real-time market prices for Bitcoin, Ethereum, and LiteCoin (the three most popular digital currencies). Below the prices you'll see an orgnaized view of the relevent and most recent articles published by major news networks. Links to access full story are all provided
                   </Row>

                   <Row style={{margin: '5px 5px 15px'}}>
                     Traversing the mobile app is made easy through the use of our Dashboard. From there, you can navigate to the specific crypto-asset pages (BitCoin, Ethereum, and LiteCoin), your wallets, and also the P2P transfer page
                   </Row>

                   <Row style={{margin: '5px 5px 15px'}}>
                     The specific crypto pages (BitCoin, Ethereum, and LiteCoin) are structured to display financial information at the top, filtered twitter activity relating to each digital asset in the middle, and below that a curated RSS feed that brings together news from across the entire web. You will also notice two buttons that are fixed to the bottom of each of these pages, 'Buy' and 'Sell'. Each of these buttons will route you to a form that enables you to either buy or sell in the wallet address denominated in that particular cryptocurrency
                   </Row>

                   <Row style={{margin: '5px 5px 15px'}}>
                     The wallets page lists out each of your uniquely demonimated wallet addresses, along with the nominal and USD equivilant balances. Below the list of wallets you will notice a button that reads 'Show Transactions'. Clicking will render the 25 most recent transactions from any of your wallets, along with the associated details
                   </Row>

                   <Row style={{margin: '5px 5px 15px'}}>
                     The P2P transfer page allows you to send digital currency to any email address that is associated with digital wallet. This feature was added to make sending and receiving payments as easy as possible
                   </Row>
                 </CardText>
               </Collapse>

               <Collapse isOpen={!this.state.collapse}>
                 <CardText>
                   <Row style={{margin: '5px 5px 10px'}}>
                     Given the larger and larger role that cryptocurrency is playing in consumer behavior, my team and I decided to build a mobile application that helps users organize their various crypto-denominated wallets, and also brings together the most relevent stream of crypto related news and user-generated content
                   </Row>
                 </CardText>
               </Collapse>

             </CardBlock>
           </Card>

         </Col>
       </Row>



       <Row>
         <Col md="12" style={{marginTop: "15px", marginBottom: '20px'}}>
           <Card style={{borderColor: '#DFDFE1'}}>
             <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '.7'}}>
               <img src="https://user-images.githubusercontent.com/25589910/90320593-9d50a400-df10-11ea-8f21-8373d49a0a7c.png" style={{ color: 'dark', height: "30px",  marginRight: "15px"}} />
                TECH STACK
             </CardHeader>
             <CardBlock>
               <Row>
                 <Col md="6">

                   <Card body>
                     <CardTitle>Front End:</CardTitle>
                     <CardText>
                       This mobile application was developed using a React Native front-end framework. The main purpose behind this decision was to have the ability to run the application across multiple different devices without having to alter the code base significantly
                     </CardText>
                   </Card>

                 </Col>
                 <Col md="6">

                   <Card body>
                     <CardTitle>Back End:</CardTitle>
                     <CardText>
                       This application is supported with a Ruby On Rails back end. The most time intensive aspect of this development project was consumed with building out our front end, so we chose a back end framework that allowed for rapid development and scalability
                     </CardText>
                   </Card>

                 </Col>
               </Row>

               <Row>
                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Included:</CardTitle>
                     <CardText>NPM, Webpack, Yarn, Rails, React Native, JavaScript, Ruby, Node.js, HTML, CSS</CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>

                   <Card style={{borderColor: '#DFDFE1'}}>
                     <CardHeader style={{ backgroundColor: '#17a2b8', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '1'}}>
                       <img src="https://user-images.githubusercontent.com/25589910/88818581-dd7ffa80-d18c-11ea-950b-6dd5f47d2d8e.png" width="32px" height="28px" style={{ marginRight: '10px' }} />
                       GitHub
                     </CardHeader>

                     <CardBlock>
                       <Row>
                         <Col md={{size: 6}}>
                           <a href="https://github.com/adamjweil/CoinStash" target="_blank" className="card-button btn btn-sm btn-success" role="button" aria-disabled="true" style={{marginBottom: "0px", width: "100%", borderRadius: '10px'}}>
                             Front End
                           </a>
                         </Col>
                         <Col md={{size: 6}}>
                           <a href="https://github.com/adamjweil/CoinStash-BackEnd" target="_blank" className="btn btn-sm btn-success" role="button" aria-disabled="true" style={{width: "100%", borderRadius: '10px'}}>
                             Back End
                           </a>
                         </Col>
                       </Row>
                     </CardBlock>

                   </Card>
                 </Col>
               </Row>
             </CardBlock>
           </Card>
         </Col>
       </Row>

       <Row style={{marginTop: "10px"}}>
         <Col md={{size: 12, offset: 0}}>
           <CoinStacheCarousal />
         </Col>
       </Row>

    </Container>
    );
  }
}

export default CoinStache;
