import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
// import Button from 'react-bootstrap/lib/Button';

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
        <h1>Home</h1>
        <div className="row justify-content-md-center">

          <div className="profile-view col-md-4">
            <div className="avatar row">
              <img src="https://user-images.githubusercontent.com/25589910/36649262-c4f14e38-1a69-11e8-8722-002b648ea184.jpg" width="360px" height="300px">
              </img>
            </div>
            <div className="linkedin-github-links row justify-content-center">

              <button type="button" className="btn btn-sm btn-outline-dark" href="https://www.linkedin.com/in/adamjweil/">
                <img src="https://s3.amazonaws.com/aw-personal-website-images/linkedin.png" width="25px" height="25px" />
                LinkedIn
              </button>
              <button type="button" className="btn btn-sm btn-outline-dark" href="https://github.com/adamjweil">
                <img src="https://s3.amazonaws.com/aw-personal-website-images/Octocat.png" width="25px" height="25px" />
                GitHub
              </button>
            </div>

            <div className="email row justify-content-center">
              <span className="label label-primary">eMail</span>

                <p><a className="nav-link" href="mailto:adamjweil@gmail.com">  AdamJWeil@gmail.com</a></p>
            </div>
            <div className="resume-show row justify-content-center">

              Résumé:
                <button onClick={this.handleToggleResume} className="btn btn-sm btn-outline-info">
                  { this.state.showResume ? "Hide" : "Show" }</button>
                <button href="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" download="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" className="btn btn-sm btn-outline-info">Download (PDF)</button>
            </div>
            <div className="resume-download row">

            </div>
          </div>
          <div className="profile-text col-md-7">
            <p>Adam Weil loves a challenge and the thrill that comes with it. As a trader at a small firm, he loved the energy and camaraderie of working with a smaller, close knit team. However, he had always wanted to start his own company; Adam founded a retail start-up with his childhood best friend and soon after went to Dev Bootcamp to complete the Fullstack Web Development program to continue creating his own projects. He now hopes to find a position that allows him to leverage his background in finance and tech. </p>
          </div>
        </div>
        </div>

    );
  }
}

export default Home;
