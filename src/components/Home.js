import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Label, Button } from 'reactstrap';

import Footer from './Footer';
import Resume from './Resume';

class Home extends Component {
  constructor() {
    super();
    this.state =
      {
    showResume: false
  }
  this.handleToggleResume = this.handleToggleResume.bind(this);
}

handleToggleResume = e =>
this.setState(prevState => ({
  showResume: !prevState.showResume
}));

render() {
  return(
      <div className="container-fluid">
        <div className="profile-row">
          <div className="profile-view">
            <div className="avatar-row">
              <img src="https://user-images.githubusercontent.com/25589910/88818074-47e46b00-d18c-11ea-8e3c-e90fa99b8622.jpg" width="360px" height="270px">
              </img>
            </div>

            <div className="linkedin-github-links row justify-content-center">
              <a href="https://www.linkedin.com/in/adamjweil/" target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true">
                <img src="https://user-images.githubusercontent.com/25589910/88818435-b3c6d380-d18c-11ea-8ec5-a399392334f6.png" width="18px" height="18px" />
                &nbsp;&nbsp;LinkedIn
              </a>

              <a href="https://github.com/adamjweil" target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true">
                <img src="https://user-images.githubusercontent.com/25589910/88818581-dd7ffa80-d18c-11ea-950b-6dd5f47d2d8e.png" width="25px" height="25px" />
                &nbsp;&nbsp;GitHub&nbsp;
              </a>
            </div>

            <div className="email row justify-content-center">
              <h5><span className="emailbadge badge badge-secondary" style={{height: '25px'}}>
                {/*
                  <img src="https://user-images.githubusercontent.com/25589910/88819185-a827dc80-d18d-11ea-86bc-fde292910062.png" width="20px" height="18px" />
                    */}
                &nbsp;Email&nbsp;
              </span></h5>
              <a className="nav-link" href="mailto:adamjweil@gmail.com" style={{marginTop: '5px'}}>  AdamJWeil@gmail.com</a>
            </div>

            <div className="resume row justify-content-center">
              <h5><span className="resumebadge badge badge-secondary" style={{height: '25px'}} >
              {/*
                <img src="https://user-images.githubusercontent.com/25589910/90219242-96704700-ddd3-11ea-8522-713e08dadb45.jpg" width="20px" height="18px" />
                  */}
                &nbsp;Résumé&nbsp;
              </span></h5>

              <button onClick={this.handleToggleResume} className="btn btn-outline-info" role="button" >
                  <span>{ this.state.showResume ? "Hide" : "Show" }</span>
              </button>

            </div>
            <hr />
            <div className="skillsets">
              <div className="row">
              <p style={{textDecoration: 'underline', marginBottom: '3px', marginLeft: '10px'}}>SKILLSETS: </p>
              <span style={{fontSize: '12px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
                Project Management, Web, Software, and App Development, Overall Business Strategy / Direction, with Overarching Strong Leadership qualities
              </span>


              </div>
            </div>
          </div>

          <div className="profile-text">
          <div className="row">
            <h3 style={{textDecoration: 'underline'}}>
              Background
            </h3>
          </div>
            <div className="row">
              <p className="">
                Adam Weil relishes a challenge and excels at bringing his diverse array of skills to each situation. Driven by a strong entrepreneurial personality, Adam thrives at generating and applying unique approaches to solve complex problems              </p>
            </div>
            <div className="row">
              <p>
                Having studied business in college, worked on both the buy and sell side for a combination of 5 years (during which he earned his CFA designation, by choice), currently plays a vital role on his high school Alma Matter’s Board, is it safe to say that Adam has a very strong background with financial markets
              </p>
            </div>
            <div className="row">
              <p>
                During his time working as a trader on Apex’s Event Driven team, Adam became increasingly passionate about, and enthusiastic about the role of technology, and its growing impact on so many sectors. His hobby of basic HTML and website development soon turned into a calling of sorts
              </p>
            </div>
            <div className="row">
              <p>
                Adam then made the decision to leave Apex, and spent the next year attending an intensive Fullstack Web & Software development program at Dev Bootcamp, in downtown NYC. Through the completion of this program Adam's proficiency as a developer grew exponentially
              </p>
            </div>
            <div className="row">
              <p>
                Upon finishing this program Adam joined a mid-sized, growing company called MezocliQ, as a Data Architect. After spending about six months integrating myself into the company, I was able to quickly increase communication between the Product and the Engineering teams. The company was in need of Project Managers at the time, so for the next six months I split my time between managing projects and continuing to design systems on Data Architecture team
              </p>
            </div>
            <div className="row">
              <p>
                It quickly became clear that I had a big competitive advantage when it came to be managing projects and communicating with teams across the company. I took on the role of Project Manager full time after about a year at the company. I excelled in this position because I was able to interface with engineers on a certain level, where without software and coding specific knowledge can go a long way. I found virtually project was being hampered by this communication gap, and was quickly able to notify other Project Managers, and increase efficiencies across the board
              </p>
            </div>
            <div className="row">
              <p>
                In addition to his passion and involvement in the tech community, Adam actively participates in several other pursuits. As mentioned above, he is a Chartered Financial Analyst, and volunteers his time in support of various CFA Program activities. He maintains a very strong relationship with his High School alma mater, Carrabassett Valley Academy, and is an active member of the Board. In his leisure time he enjoys traveling, playing golf, snowboarding, water sports, paragliding, motorcycles, and spending time with friends and family
              </p>
            </div>
          </div>

          <div className="resume-view">
            <div className="row">
              { this.state.showResume ? <Resume /> : null }
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
