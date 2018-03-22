import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import CoinStacheCarousal from './projects/CoinStacheCarousal';
import CoinStache from './projects/CoinStache';
import EatReview from './projects/EatReview';
import InstaClone from './projects/InstaClone';
import WebScraper from './projects/WebScraper';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeProject: 0
    },
    this.toggleCoinProject = this.toggleCoinProject.bind(this);
    this.toggleEatProject = this.toggleEatProject.bind(this);
    this.toggleInstaProject = this.toggleInstaProject.bind(this);
    this.toggleScrapeProject = this.toggleScrapeProject.bind(this);
  }
toggleCoinProject = e =>
  this.setState({ activeProject: 0 });
toggleEatProject = e =>
  this.setState({ activeProject: 1 });
toggleInstaProject = e =>
  this.setState({ activeProject: 2 });
toggleScrapeProject = e =>
  this.setState({ activeProject: 3 });

render() {
  return(
    <div className="project-container">

      <div className="project-navigation">
          <h5>Projects:</h5>
          <div className="project-links">
            <div className="project-links row">
              <button type="button"
                onClick={this.toggleCoinProject}
                className={`btn btn-dark + ${this.state.activeProject === 0 ? "active" : ""}`}>
                Coin'Stache
              </button>
            </div>
            <div className="project-links row">
              <button type="button"
                onClick={this.toggleEatProject}
                className={`btn btn-dark + ${this.state.activeProject === 1 ? "active" : ""}`}>
                Eat & Review
              </button>
            </div>
            <div className="project-links row">
              <button type="button"
                onClick={this.toggleInstaProject}
                className={`btn btn-dark + ${this.state.activeProject === 2 ? "active" : ""}`}>
                React-InstaClone
              </button>
            </div>
            <div className="project-links row">
              <button type="button"
                onClick={this.toggleScrapeProject}
                className={`btn btn-dark + ${this.state.activeProject === 3 ? "active" : ""}`}>
                Page Scraper
              </button>
            </div>

          </div>
      </div>
      <div className="project-main">
        { this.state.activeProject === 0 ?  <CoinStache /> :
          this.state.activeProject === 1 ?  <EatReview /> :
          this.state.activeProject === 2 ?  <InstaClone /> :
          this.state.activeProject === 3 ?  <WebScraper /> : "Error"
           }

      </div>

    </div>
    );
  }
}

export default Projects;
