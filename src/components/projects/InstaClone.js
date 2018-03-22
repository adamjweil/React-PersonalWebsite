import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class InstaClone extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <div className="projectOverview">
      <div className="projectName">
        <h2>React-InstaClone</h2>
      </div>
      <div className="projectTitle">

      </div>

      <div className="projectDescription">
        <h3>DESCRIPTION</h3>
        <p>Web application built to simulate the ‘Instagram’ experience in browser. Has a main page displaying all of the recently posted photos. Each user can navigate to their unique profile page where they can upload images which are then displayed on their timeline.</p>

        <div className="techStack">
          <h3>TECH STACK</h3>
          <div className="frontEnd">
            <div className="techTitles">
              <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
            </div>
            <div className="techDetails">
              <p>This web app application is built entirely in React JS. You will notice that when images are uploaded they are displayed in the timeline immediately, without the page having to reload. The same is true when you navigate between pages, the page renders without ever needing to reload. I built this website to refine my React skills by creating a complete application where all data is stored in State, rather then a database. Since everything is managed in State, there is no need for a Back End.</p>
            </div>
            <div className="techDetails">

            </div>
          </div>

        </div>
      </div>
    </div>


    );
  }
}

export default InstaClone;
