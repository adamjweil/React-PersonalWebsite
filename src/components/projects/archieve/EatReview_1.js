import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';

class EatReview extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <div className="projectOverview">
        <div className="projectName">
          <h2>Eat & Review</h2>
        </div>
        <div className="projectTitle">
        
        </div>
        <div className="projectDescription">
          <h3>DESCRIPTION</h3>
          <p>Web application built for posting new and exciting restaurants. Users can create an account, post a new restaurant with relevant details (provided that the restaurant is not already on the app), read and post reviews for these various eateries, and manage their account through the easy-to-use profile page.</p>
        <div className="techStack">
          <h3>TECH STACK</h3>
            <div className="frontEnd">
              <div className="techTitles">
                <h4>FRONT END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
              </div>
              <div className="techDetails">
                <p>This web application was built using a Ruby On Rails framework. To create the dynamic Login and Register buttons on the Navbar, I needed to integrate some Javascript into the code base.</p>
              </div>
            </div>

            <div className="frontEnd">
              <div className="techTitles">
                <h4>BACK END  <i className="glyphicon glyphicon-chevron-right"></i></h4>
              </div>
              <div className="techDetails">
                <p>The Back End of this application is built in Ruby, and the data it stores is managed with a PostgreSQL database.</p>
              </div>
            </div>

            <div className="frontEnd">
              <div className="techTitles">
                <h4>DATABASES  <i className="glyphicon glyphicon-chevron-right"></i></h4>
              </div>
              <div className="techDetails">
                <p>PostgresSQL, ActiveRecord</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default EatReview;
