import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Label, Button } from 'reactstrap';

import Footer from './Footer';
import Resume from './Resume';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    showResume: false
  },
  this.handleShowResume = this.handleShowResume.bind(this);
  this.handleHideResume = this.handleHideResume.bind(this);
  this.handleToggleResume = this.handleToggleResume.bind(this);
}
handleShowResume = e =>
  this.setState({ showResume: true });
handleHideResume = e =>
  this.setState({ showResume: false });
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
              <img src="https://user-images.githubusercontent.com/25589910/36649262-c4f14e38-1a69-11e8-8722-002b648ea184.jpg" width="360px" height="310px">
              </img>
            </div>

            <div className="linkedin-github-links row justify-content-center">
              <a href="https://www.linkedin.com/in/adamjweil/" target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true">
                <img src="https://s3.amazonaws.com/aw-personal-website-images/linkedin.png" width="25px" height="25px" />
                &nbsp;&nbsp;LinkedIn
              </a>

              <a href="https://github.com/adamjweil" target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true">
                <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="25px" height="23px" />
                &nbsp;&nbsp;GitHub&nbsp;
              </a>
            </div>

            <div className="email row justify-content-center">
              <h5><span className="emailbadge badge badge-secondary">
                <img src="https://s3.amazonaws.com/aw-personal-website-images/email.svg" width="25px" height="25px" />
                eMail:&nbsp;
              </span></h5>
              <a className="nav-link" href="mailto:adamjweil@gmail.com">  AdamJWeil@gmail.com</a>
            </div>

            <div className="resume row justify-content-center">
              <h5><span className="resumebadge badge badge-secondary">
                <img src="https://s3.amazonaws.com/aw-personal-website-images/resume_logo1.png" width="18px" height="18px" />
                &nbsp;Résumé:&nbsp;
              </span></h5>

              <button onClick={this.handleToggleResume} className="btn btn-outline-info" role="button">
                  { this.state.showResume ? "Hide" : "Show" }
              </button>

              <a className="btn btn-link info" href="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" download >
                  Download (PDF)
              </a>

            </div>
          </div>

          <div className="profile-text">
            <div className="row">
              <p className="">
                Adam Weil loves a challenge and excels at bringing a diverse array of skills to each situation. Driven by a strong entrepreneurial personality, Adam thrives at generating and applying unique approaches to solve complex problems.
              </p>
            </div>
            <div className="row">
              <p>
                As a trader at a small brokerage firm, he identified and executed on opportunities in the pharmaceutical and technology sectors. Adam co-founded a web-based apparel business, focusing on the site development and offshore product manufacture. That experience captivated Adam's enthusiasm for technology, specifically web and software development. As a result, he decided to strengthen his skills by attending a Fullstack Web Development program at Dev Bootcamp. Through the completion of this program Adam's proficiency as a developer grew exponentially.
              </p>
            </div>
            <div className="row">
              <p>
                Adam is looking for opportunities to capitalize on his experience in finance and passion for technology, whether that be as a member of a growing start-up, or in a more mature established business. Adam brings both strong technical and interpersonal skills into whatever environment he finds himself in.
              </p>
            </div>
          </div>

          <div className="profile-interests">
            <p>
              In addition to his passion and involvement in the tech community, Adam actively participates in a number of other pursuits. He is a certified Chartered Financial Analyst, and has volunteered his time in support of certain CFA Program activities. He maintains a very strong relationship with his High School alma mater, Carrabassett Valley Academy, and is an active Investment Committee member of schools endowment. In his leisure time he enjoys traveling, playing golf, snowboarding, water sports, and spending time friends and family.
            </p>
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
