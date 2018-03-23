import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button } from 'reactstrap';

class EatReview extends Component {
  constructor() {
    super();
  }

render() {
  return(
      <Container>
        <Row>
          <Col md="12" style={{textAlign: 'center'}}>
            <h1>Adam's Eat & Review<h5>Find the Best Spots to Eat!</h5></h1>
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
                 Web application built for posting new and exciting restaurants. Users can create an account, post a new restaurant with relevant details (provided that the restaurant is not already on the app), read and post reviews for these various eateries, and manage their account through the easy-to-use profile page.
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
                     <CardText>
                        This web application was built using a Ruby On Rails framework. To create the dynamic Login and Register buttons on the Navbar, I needed to integrate some Javascript into the code base.
                     </CardText>
                   </Card>
                 </Col>
                 <Col md="6">
                   <Card body>
                     <CardTitle>Back End</CardTitle>
                     <CardText>
                       The Back End of this application is built in Ruby, and the data it stores is managed with a PostgreSQL database.
                     </CardText>
                   </Card>
                 </Col>
               </Row>

               <Row>
                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Database</CardTitle>
                     <CardText>
                       PostgresSQL, ActiveRecord
                     </CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 3, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>
                      <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="32px" height="28px" />
                      &nbsp;&nbsp;GitHub
                    </CardTitle>
                    <a href="https://github.com/adamjweil/AdamsEat-Review" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{}}>
                      &nbsp;&nbsp; Source Code
                    </a>
                  </Card>
                 </Col>

                 <Col md={{size: 3, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>Heroku</CardTitle>
                    <a href="https://adams-eatandreview.herokuapp.com/" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{}}>
                      &nbsp;&nbsp; Visit Site!
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

export default EatReview;
