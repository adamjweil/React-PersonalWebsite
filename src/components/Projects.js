import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container, ButtonGroup, Button } from 'reactstrap';

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
        <Col md={{size: 0}} style={{backgroundColor: 'grey'}}>
          <div className="project-navigation">
            <Row>
              <div className="project-nav-header">
                <h5>
                  <img src="https://s3.amazonaws.com/aw-personal-website-images/Project_Icon.png" style={{height: '25px', width: '25px', marginRight: '5px'}} />
                  Projects:</h5>
              </div>
            </Row>
            <ButtonGroup vertical style={{marginTop: '0px', width: '150px', marginLeft: '20px'}}>
              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleCoinProject}
                className={`btn btn-info + ${this.props.activeProject === 0 ? "active" : ""}`}>
                Coin'Stache
              </button>

              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleEatProject}
                className={`btn btn-info + ${this.props.activeProject === 1 ? "active" : ""}`}>
                Eat & Review
              </button>

              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleInstaProject}
                className={`btn btn-info + ${this.props.activeProject === 2 ? "active" : ""}`}>
                React-InstaClone
              </button>

              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleScrapeProject}
                className={`btn btn-info + ${this.props.activeProject === 3 ? "active" : ""}`}>
                Page Scraper
              </button>

            </ButtonGroup>
          </div>
        </Col>
        <Col md={{size: 10, offset: 2}} sm={{size: 12, offset: 0}}>
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
