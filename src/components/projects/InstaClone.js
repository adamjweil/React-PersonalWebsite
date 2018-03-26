import React, { Component } from 'react';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import { Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, Collapse, Badge, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import InstaCloneCarousal from './carousels/InstaCloneCarousal';

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      collapse: true,
      activeTab: '1'
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  toggleDescription() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
             <CardHeader style={{ backgroundColor: '#d9edf7', height: '50px' }}>
               Description
             </CardHeader>
             <CardBlock>
               <CardText>
                 Uploading photos traditionally requires multiple layers of communication between a client and server. File upload, form submission, and encoding the image into an object that can be more easily stored (Base64, for example). These processes can be time consuming, so there is generally a lag between the time you upload a photo, and when the photo is viewable on a browser
                 <br />
                 <br />
                 React-InstaClone is a web application that I built to simulate the 'Instagram' experience (uploading and sharing photos), in a web browser.
                 I chose to build this app in React to mitigate some of these issues highlighted above, and make uploading images as fast and seamless as possible. I eliminated much of the traditional friction involved with uploading photos through the use of functional components, pure components, storing all data by way of application 'State', 'Props', and the nature of React's one-way data flow
                 <br />
                 <br />
                 The landing page displays the most recently posted photos, along with their associated blurbs, and are tagged with the username and timestamp of the poster. Anybody can add an image to the app's photo stream via the form on the bottom of the page. Simply choose the photo you wish to upload, enter a brief description, and type in your username. After selecting a photo in the file input field, you will immediately notice a preview of the image just to the right of the form. Upon submitting this form, the photo stream will update instantly, without the page ever having to reload. This showcases some of the power of using React
                 <br />
                 <br />
                 Clicking on 'Profile' in the navigation menu will direct you to my specific profile page. You will see my Avatar and a brief bio on the top of the page. Directly below there is another 'New Photo' form, similar to the one on the Homepage. Notice that this form has no field to enter a username. That is because any photo uploaded from my profile page will be automatically tagged with my username (@AdamJWeil). Photos uploaded from my profile will instantly render on my personal page, and will also be added to the top of the stream located on the Homepage
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
                     <CardTitle>Front End:</CardTitle>
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
