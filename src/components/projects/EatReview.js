import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, Collapse } from 'reactstrap';

import EatReviewCarousal from './carousels/EatReviewCarousal';

class EatReview extends Component {
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
            <h1>Adam's Eat & Review<h5>Find the Best Spots to Eat!</h5></h1>
          </Col>
        </Row>

        <Row>
          <Col md="12">
           <Card style={{borderColor: '#DFDFE1'}}>
             <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '.7'}}>
               <img src="https://s3.amazonaws.com/aw-personal-website-images/chat.png" style={{ color: 'dark', height: "30px",  marginRight: "15px"}} />
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
                     The best way to become more proficient with a certain coding language or framework is to build an application utilizing said language/framework. Rails provides developers with a structured framework for building websites and applications by simplifying and abstracting repetitive tasks. 'DRY' is a common mantra echoed throughout the Ruby community, which stands for Don't Repeat Yourself. Adhering to this idea allows you to write segments of code that can be easily reused. Another important principle of Rails is convention over configuration, which means that as a programmer you can spend less time configuring files as long as you understand and conform to the primary conventions that Rails provides you with.
                   </Row>
                   <Row style={{margin: '5px 5px 15px'}}>
                     Web application built for posting new and exciting restaurants. Users can create an account, post a new restaurant with relevant details (provided that the restaurant is not already on the app), read and post reviews for these various eateries, and manage their account through the easy-to-use profile page
                   </Row>
                 </CardText>
               </Collapse>

               <Collapse isOpen={!this.state.collapse}>
                 <CardText>
                   <Row style={{margin: '5px 5px 15px'}}>
                     Web application built for posting new and exciting restaurants. Users can create an account, post a new restaurant with relevant details (provided that the restaurant is not already on the app), read and post reviews for these various eateries, and manage their account through the easy-to-use profile page
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
               <img src="https://s3.amazonaws.com/aw-personal-website-images/chip.png" style={{ color: 'dark', height: "30px",  marginRight: "15px"}} />
               TECH STACK
             </CardHeader>
             <CardBlock>
               <Row>
                 <Col md="6">
                   <Card body>
                     <CardTitle>Front End:</CardTitle>
                     <CardText>
                        This web application was built using a Rails framework, therefore most of the code base is in Ruby. I also used Coffeescript & Javascript to make a couple of features more responsive. Both were utilized to create the dynamic Login and Register buttons on the Navbar, for example
                     </CardText>
                   </Card>
                 </Col>
                 <Col md="6">
                   <Card body>
                     <CardTitle>Back End:</CardTitle>
                     <CardText>
                       To store the information that this application serves, I set up a relational PostgreSQL database. The data is organized into three primary resources: Users, Restaurants, and Reviews. Each of these represents a table in the database, and are structured to accomodate the various types relationships between entities
                     </CardText>
                   </Card>
                 </Col>
               </Row>

               <Row>
                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Included:</CardTitle>
                     <CardText>
                       Ruby, Javascript, Rails, PostgreSQL, ActiveRecord, RESTful Routing, HTML, CSS, Bootstrap, Coffeescript, BCrypt, JQuery, Faker 'Gem'
                     </CardText>
                   </Card>
                 </Col>

                 <Col md={{ size: 3, offset: 0 }} style={{marginTop: "15px"}}>
                   <Card style={{borderColor: '#DFDFE1'}}>
                     <CardHeader style={{ backgroundColor: '#17a2b8', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '1'}}>
                       <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="32px" height="28px" style={{ marginRight: '10px'}} />
                       GitHub
                     </CardHeader>
                     <CardBlock>
                       <a href="https://github.com/adamjweil/AdamsEat-Review" target="_blank" className="card-button btn btn-sm btn-success" role="button" aria-disabled="true" style={{marginBottom: "0px", width: "100%", borderRadius: '10px'}}>
                         Source Code
                       </a>
                     </CardBlock>
                   </Card>
                 </Col>

                 <Col md={{ size: 3, offset: 0 }} style={{marginTop: "15px"}}>
                   <Card style={{borderColor: '#DFDFE1'}}>
                     <CardHeader style={{ backgroundColor: '#17a2b8', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '1'}}>
                       <img src="https://s3.amazonaws.com/aw-personal-website-images/Heroku_Logo.png" width="32px" height="28px" style={{ marginTop: '0px', marginRight: '10px'}} />
                       Heroku
                     </CardHeader>
                     <CardBlock>
                       <a href="https://adams-eatandreview.herokuapp.com/" target="_blank" className="card-button btn btn-sm btn-success" role="button" aria-disabled="true" style={{marginBottom: "0px", width: "100%", borderRadius: '10px'}}>
                         Visit Site!
                       </a>
                     </CardBlock>
                   </Card>
                 </Col>

               </Row>
             </CardBlock>
           </Card>

           <Row style={{marginTop: "10px"}}>
             <Col md={{size: 12, offset: 0}}>
               <EatReviewCarousal />
             </Col>
           </Row>

         </Col>
       </Row>
     </Container>
    );
  }
}

export default EatReview;
