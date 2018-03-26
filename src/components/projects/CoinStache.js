import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

import CoinStacheCarousal from './carousels/CoinStacheCarousal';

class CoinStache extends Component {
  constructor() {
    super();
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
             <CardHeader style={{ backgroundColor: '#d9edf7' }}>
               DESCRIPTION
             </CardHeader>
             <CardBlock>
               <CardText>
                The first and most significant cryptocurrency, BitCoin, was created and made available for use in early 2009. The digital asset was designed to work as an entirely new medium of exchange. BitCoin utilizes a decentralized, distributed ledger, called a Blockchain. All of the blockchain data is linked and secured using cryptography. Blockchain technology is arguably the most powerful feature of crptocurrency, and is what differentiates itself from traditional currencies that are centraly managed. In the decade since it's creation, cryptocurrency has rapidly integrated itself into the global financial ecosystem, and facilitates a growing percentage of overall transactions
                <br />
                <br />
                Given the larger and larger role cryptocurrency is playing in consumer behavior, my team and I decided to build a mobile application that helps users organize their various crypto wallets, and also creates the most relevent stream of crypto related news and user-generated content
                <br />
                <br />
                Upon successful login, users are brought to the home page, where they can see real-time market prices for Bitcoin, Ethereum, and LiteCoin (the three most popular digital currencies). Below the prices you'll see an orgnaized view of the relevent and most recent articles published by major news networks. Links to access full story are all provided
                <br />
                <br />
                Traversing the mobile app is made easy through the use of our Dashboard. From there, you can navigate to the specific crypto-asset pages (BitCoin, Ethereum, and LiteCoin), your wallets, and also the P2P transfer page
                <br />
                <br />
                The specific crypto pages are structured to show the financial info on top...
                <br />
                <br />
                The wallets page ....
                <br />
                <br />
                The P2P transfer page ...

                dashboard you can
                ar publications. related to  so it was an easy decision to The amount of digital currencies is always growing, but given that most activity
                 Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo
               </CardText>
             </CardBlock>
           </Card>
         </Col>
       </Row>

       <Row>
         <Col md="12" style={{marginTop: "15px", marginBottom: '20px'}}>
           <Card style={{borderColor: '#DFDFE1'}}>
             <CardHeader style={{ backgroundColor: '#d9edf7', height: '40px'}}>
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
                       This application is supported with a Ruby On Rails back-end. With most of the time intensive aspects of the development being consumed in our fron-end, we needed a back-end that would allow for rapid development and scalability
                     </CardText>
                   </Card>
                 </Col>
               </Row>

               <Row>
                 <Col md={{size: 4, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Frameworks:</CardTitle>
                     <CardText>NPM, Webpack, Yarn, Rails</CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 4, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Languages:</CardTitle>
                     <CardText>React Native, JavaScript, Ruby, Node.js, HTML, CSS</CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 4, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="github-heroku-buttons text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>
                      <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="32px" height="28px" />
                      &nbsp;&nbsp;GitHub
                    </CardTitle>
                    <a href="https://github.com/adamjweil/CoinStash" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{marginBottom: "10px", width: "100%"}}>
                      Front End&nbsp;
                    </a>
                    <a href="https://github.com/adamjweil/CoinStash-BackEnd" target="_blank" className="btn btn-sm btn-light" role="button" aria-disabled="true" style={{width: "100%"}}>
                      Back-End
                    </a>
                  </Card>
                 </Col>


               </Row>

             </CardBlock>
           </Card>
           <Row style={{marginTop: "10px"}}>
             <Col md={{size: 10, offset: 1}}>
               <CoinStacheCarousal />
             </Col>
           </Row>

         </Col>
       </Row>
     </Container>
    );
  }
}

export default CoinStache;
