import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button } from 'reactstrap';

class InstaClone extends Component {
  constructor() {
    super();
  }

render() {
  return(
      <Container>
        <Row>
          <Col md="12" style={{textAlign: 'center'}}>
            <h1>React-InstaClone<h5>Share Your Photos!</h5></h1>
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
                 Web application built to simulate the ‘Instagram’ experience in browser. Has a main page displaying all of the recently posted photos. Each user can navigate to their unique profile page where they can upload images which are then displayed on their timeline.
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
                        This web app application is built entirely in React JS. You will notice that when images are uploaded they are displayed in the timeline immediately, without the page having to reload. The same is true when you navigate between pages, the page renders without ever needing to reload. I built this website to refine my React skills by creating a complete application where all data is stored in State, rather then a database. Since everything is managed in State, there is no need for a Back End.
                     </CardText>
                   </Card>
                 </Col>

               </Row>

               <Row>
                 <Col md={{size: 6, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body>
                     <CardTitle>Included:</CardTitle>
                     <CardText>
                       React Router (BrowserRouter, Route, Switch, NavLink), JQuery, Handle Form Input/Submit, Fully 'Componentized', React Bootstrap Integration 
                     </CardText>
                   </Card>
                 </Col>

                 <Col md={{size: 3, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>
                      <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="32px" height="28px" />
                      &nbsp;&nbsp;GitHub
                    </CardTitle>
                    <a href="https://github.com/adamjweil/React-InstaClone" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{}}>
                      &nbsp;&nbsp; Source Code
                    </a>
                  </Card>
                 </Col>

                 <Col md={{size: 3, offset: 0}} style={{marginTop: "15px"}}>
                   <Card body inverse className="text-center" style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardTitle>Heroku</CardTitle>

                    <a href="https://react-instaclone.herokuapp.com/" target="_blank" className="card-button btn btn-sm btn-light" role="button" aria-disabled="true" style={{}}>
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

export default InstaClone;
