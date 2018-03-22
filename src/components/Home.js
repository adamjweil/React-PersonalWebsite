import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
// import Button from 'react-bootstrap/lib/Button';
// import { Label } from 'react-bootstrap/lib/Label';
import { Label } from 'reactstrap';

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
        <div className="row justify-content-md-center">
          <div className="profile-view col-md-4">

            <div className="avatar row">
              <img src="https://user-images.githubusercontent.com/25589910/36649262-c4f14e38-1a69-11e8-8722-002b648ea184.jpg" width="360px" height="300px">
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
                <button onClick={this.handleToggleResume} className="btn btn-sm btn-outline-info">
                  { this.state.showResume ? "Hide" : "Show" }
                </button>
                <button href="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" download="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" className="btn btn-sm btn-outline-info">
                  Download (PDF)
                </button>
            </div>

          </div>

          <div className="profile-text col-md-6">
            <div className="row">
              <p className="lead">
                Adam Weil loves a challenge and excels at bringing a diverse array of skills to each situation.
              </p>
            </div>
            <div className="row">
              <p>
                As a trader at a small brokerage firm, he identified and executed on opportunities in the pharmaceutical and technology sectors. Adam co-founded a web-based apparel business, focusing on the site development and offshore product manufacture. Adam built on this experience, completing the Fullstack Web Development program at Dev Bootcamp.
              </p>
            </div>
            <div className="row">
              <p>
                Adam is looking for opportunities to capitalize on his experience in finance and technology, whether that be as a member of a growing start-up, or in a more mature established business. Adam brings both strong technical and interpersonal skills, and  whatever environment he
              </p>
            </div>

          </div>
          <div className="resume col-md-12">
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
