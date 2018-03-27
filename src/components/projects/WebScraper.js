import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, Collapse } from 'reactstrap';

class WebScraper extends Component {
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
            <h1>Page Scraper<h5>Parsing Data Has Never Been Easier</h5></h1>
          </Col>
        </Row>
        <Row>
          <Col md="12">
           <Card style={{borderColor: '#DFDFE1'}}>
             <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', opacity: '.7'}}>
               DESCRIPTION
               <Button
                 style={{opacity: '.7', marginLeft: '20px', borderRadius: '5px', fontSize: '12px'}}
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
                     This simple web app provides an easy way to scrape websites for content located within {`<h1>, <h2>, <h3>, <h4>, and <p>`} tags, as well as links and photos. On the Home Page you can see the ten most recently scraped URLs by anyone (using this app, obviously). Below the recently scraped section there is an input field where you can enter the URL that you wish to scrape
                   </Row>
                   <Row style={{margin: '5px 5px 15px'}}>
                     Upon submission you'll be redirected to the results page, which displays all of the scraped content (including links and photos) in an organized, user-friendly way. If the page being scraped has a large amount of content, you can use the 'Quick Links' section on the top left of the results page to navigate the data more easily and effiently
                   </Row>
                   <Row style={{margin: '5px 5px 15px'}}>
                     When entering a URL to scrape, the search is tagged with your Session ID. This allows you to view previously scraped URLs without ever needing to create a account. You can access this data by navigating to the 'History' page. Deleting your cookies will reset your Session ID, thereby clearing all previously scraped URLs
                   </Row>
                 </CardText>
               </Collapse>
               <Collapse isOpen={!this.state.collapse}>
                 <CardText>
                   <Row style={{margin: '5px 5px 15px'}}>
                     This simple web app provides an easy way to scrape websites for content located within {`<h1>, <h2>, <h3>, <h4>, and <p>`} tags, as well as links and photos. On the Home Page you can see the ten most recently scraped URLs by anyone (using this app, obviously). Below the recently scraped section there is an input field where you can enter the URL that you wish to scrape
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
             <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', opacity: '.7'}}>
               TECH STACK
             </CardHeader>
             <CardBlock>
               <Row>
                 <Col md={{size: 10, offset: 1}}>
                   <Card body>
                     <CardTitle>Front End:</CardTitle>
                     <CardText>
                        This app was built using Ruby on Rails, and styled with Bootstrap. A couple Ruby gems in particular helped make this scraping algorithm much more dynamic and seamless. Nokogiri, and HTTParty
                     </CardText>
                   </Card>
                 </Col>

               </Row>

               <Row>
                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Included:</CardTitle>
                     <CardText>
                       HTTParty, Nokogiri, Ruby, Rails, HTML, CSS, Bootstrap, Sessions, RESTful Routes, PostgreSQL, ActiveRecord
                     </CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 3, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="github-heroku-buttons text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>
                      <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="32px" height="28px" />
                      &nbsp;&nbsp;GitHub
                    </CardTitle>
                    <a href="https://github.com/adamjweil/AdamsApp" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{}}>
                      &nbsp;&nbsp; Source Code
                    </a>
                  </Card>
                 </Col>

                 <Col md={{size: 3, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>Heroku</CardTitle>
                    <a href="https://murmuring-anchorage-57613.herokuapp.com/" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{}}>
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

export default WebScraper;
