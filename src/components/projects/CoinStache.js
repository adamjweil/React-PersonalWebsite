import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

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
             <CardHeader style={{ backgroundColor: '#d9edf7' }}>DESCRIPTION</CardHeader>
             <CardBlock>
               <CardText>
                 Brings all CryptoCurrency related news, market-data & other user-generated content together into one easy-to-use mobile application. Users can buy/sell Bitcoin, Ethereum, and Litecoin through their comprehensive Coin’Stache wallet, as well as easily transfer balances to one another, in a similar fashion to Venmo.
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
                     <CardTitle>Front End</CardTitle>
                     <CardText>This mobile application was developed using a React Native front-end framework. The main purpose behind this decision was to have the ability to run the application across multiple different devices without having to alter the code base significantly.</CardText>
                   </Card>
                 </Col>
                 <Col md="6">
                   <Card body>
                     <CardTitle>Back End</CardTitle>
                     <CardText>This application is supported with a Ruby On Rails back-end. With most of the time intensive aspects of the development being consumed in our fron-end, we needed a back-end that would allow for rapid development and scalability.</CardText>
                   </Card>
                 </Col>
               </Row>

               <Row>
                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Frameworks</CardTitle>
                     <CardText>NPM, Webpack, Yarn</CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 4, offset: 1}} style={{marginTop: "15px"}}>
                   <Card body inverse className="github-heroku-buttons text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>
                      <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="32px" height="28px" />
                      &nbsp;&nbsp;GitHub
                    </CardTitle>
                    <a href="https://github.com/adamjweil/CoinStash" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{marginBottom: "10px", width: "220px"}}>
                      &nbsp;&nbsp;Front End Source Code&nbsp;
                    </a>
                    <a href="https://github.com/adamjweil/CoinStash-BackEnd" target="_blank" className="btn btn-sm btn-light" role="button" aria-disabled="true" style={{width: "220px"}}>
                      &nbsp;&nbsp;Back-End Source Code&nbsp;
                    </a>
                  </Card>
                 </Col>


               </Row>

             </CardBlock>
           </Card>

         </Col>
       </Row>
     </Container>
    );
  }
}

export default CoinStache;
