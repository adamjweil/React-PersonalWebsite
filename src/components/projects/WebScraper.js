import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button } from 'reactstrap';

class WebScraper extends Component {
  constructor() {
    super();
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
             <CardHeader style={{ backgroundColor: '#d9edf7' }}>
               DESCRIPTION
             </CardHeader>
             <CardBlock>
               <CardText>
                The simple web app provides an easy way to scrape websites for content located within {`<h1>, <h2>, <h3>, <h4>, and <p>`}  tags, as well links and photos. On the Home Page you can see the ten most recently scraped URLs by anyone (using this app, obviously). Below the recently scraped URLs section, there is an input field where you can enter the URL that you wish to scrape.  A list of the URLs that you've scraped can easily be accessed by navigating to the 'Hisory' page. This data is not stored in our database, so deleting your cookies will erase your scraping history. eaThis information is not stored in a database, so you c You can easily access your search history by navigating to the 'History' page.  After submitting a URL, you'll be redirected to a page displaying an organized few of all the scraped content, links, and photos. If the page being scraped has a large amount of content, you can use the 'Quick Links' section on the top left of the results page to navigate the data more easily and effiently.
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
                 <Col md={{size: 10, offset: 1}}>
                   <Card body>
                     <CardTitle>Front End</CardTitle>
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
                       HTTParty, Nokogiri
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
