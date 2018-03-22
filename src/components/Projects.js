import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
import CoinStacheCarousal from './projects/CoinStacheCarousal';

class Projects extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <div className="container-fluid">

      <div className="project-navigation col-md-2">
        <div className="btn-group-vertical">
          <button type="button" class="btn btn-secondary">Coin'Stache</button>
          <button type="button" class="btn btn-secondary">Eat & Review</button>
          <button type="button" class="btn btn-secondary">React-InstaClone</button>
          <button type="button" class="btn btn-secondary">HomePage WebScraper</button>
        </div>
      </div>
      <div className="col-md-7">
        <h2>CoinStache</h2>
        <CoinStacheCarousal />
      </div>
    </div>
    );
  }
}

export default Projects;
