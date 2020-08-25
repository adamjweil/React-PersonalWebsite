import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container, ButtonGroup, Button, Alert } from 'reactstrap';

import CoinStache from './projects/CoinStache';
import EatReview from './projects/EatReview';
import InstaClone from './projects/InstaClone';
import WebScraper from './projects/WebScraper';
import AltSetup from './projects/AltSetup';

class Projects extends Component {
  constructor() {
    super();

  }


render() {
  return(
    <Container>
      <Row>
        <Col md={{size: 12}}>
          <Alert color="info" style={{marginTop: '10px', fontSize: '18px', fontWeight: 700}}>
            On this page you I've posted a few personal projects I have worked on. In order to keep the page clean and 'uncluttered', I have written up a very brief discription of each project while also allowing you to click "show full" to read a more detailed, lenthly discription of each. In the lengthier discriptions, I'll go into what the goal or purpose of the project was, describe the stacks I used to complete each project, and I'll also walk you through some of the pages within each App.
          </Alert>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col md={{size: 12}} style={{textAlign: 'center', marginTop: '10px'}}>
          <h5><img src="https://user-images.githubusercontent.com/25589910/90320305-139fd700-df0e-11ea-9b3f-204ac13c00ce.png" style={{height: '25px', width: '25px', marginRight: '5px'}} />
          Projects:
          <ButtonGroup style={{marginLeft: "10px"}}>
            <Button onClick={this.props.toggleCoinProject}>1</Button>
            <Button onClick={this.props.toggleEatProject}>2</Button>
            <Button onClick={this.props.toggleInstaProject}>3</Button>
            <Button onClick={this.props.toggleScrapeProject}>4</Button>
          </ButtonGroup>
          </h5>
        </Col>
      </Row>

      <Row style={{paddingBottom: '50px'}}>
        <Col md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}}>
          <div className="projects">
            { this.props.activeProject === 0 ?  <CoinStache /> :
              this.props.activeProject === 1 ?  <EatReview /> :
              this.props.activeProject === 2 ?  <InstaClone /> :
              this.props.activeProject === 3 ?  <WebScraper /> :
              this.props.activeProject === 4 ?  <AltSetup /> : "Error"
            }
          </div>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Projects;
