import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';

import CoinStache from './projects/CoinStache';
import EatReview from './projects/EatReview';
import InstaClone from './projects/InstaClone';
import WebScraper from './projects/WebScraper';
import AltSetup from './projects/AltSetup';

class Projects1 extends Component {
  constructor() {
    super();

  }

render() {
  return(
    <div className="project-container">
      <div className="project-navigation">
          <h5>Projects:</h5>
          <div className="project-links">
            <div className="project-links row">
              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleCoinProject}
                className={`btn btn-outline-dark + ${this.props.activeProject === 0 ? "active" : ""}`}>
                Coin'Stache
              </button>
            </div>
            <div className="project-links row">
              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleEatProject}
                className={`btn btn-outline-dark + ${this.props.activeProject === 1 ? "active" : ""}`}>
                Eat & Review
              </button>
            </div>
            <div className="project-links row">
              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleInstaProject}
                className={`btn btn-outline-dark + ${this.props.activeProject === 2 ? "active" : ""}`}>
                React-InstaClone
              </button>
            </div>
            <div className="project-links row">
              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleScrapeProject}
                className={`btn btn-outline-dark + ${this.props.activeProject === 3 ? "active" : ""}`}>
                Page Scraper
              </button>
            </div>

            <div className="project-links row">
              <button type="button"
                style={{borderWidth: '3px'}}
                onClick={this.props.toggleAltSetup}
                className={`btn btn-outline-dark + ${this.props.activeProject === 4 ? "active" : ""}`}>
                Alt Setup
              </button>
            </div>

          </div>
      </div>

        <div className="project-main">
          { this.props.activeProject === 0 ?  <CoinStache /> :
            this.props.activeProject === 1 ?  <EatReview /> :
            this.props.activeProject === 2 ?  <InstaClone /> :
            this.props.activeProject === 3 ?  <WebScraper /> :
            this.props.activeProject === 4 ?  <AltSetup /> : "Error"
             }
        </div>

      </div>

    );
  }
}

export default Projects1;
