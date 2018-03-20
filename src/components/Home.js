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
      <div className="home">
        <h1>Home</h1>
          <div className="homePhoto">
            <img src="https://user-images.githubusercontent.com/25589910/36649262-c4f14e38-1a69-11e8-8722-002b648ea184.jpg">
            </img>
            <div className="outsideLinks">

              <h3><i className="glyphicon glyphicon-chevron-right"></i><a href="https://www.linkedin.com/in/adamjweil/" target="_blank"> LinkedIn</a></h3>
              <h3><i className="glyphicon glyphicon-chevron-right"></i><a href="https://github.com/adamjweil" target="_blank"> GitHub</a></h3>
              <h3><a href="mailto:adamjweil@gmail.com">AdamJWeil@gmail.com</a></h3>

              <div className="showRes">
                <h3>Résumé:
                  <button onClick={this.handleToggleResume} bsStyle="info" bsSize="large" style={{color:'white',fontSize:'1.2rem;'}}>
                    { this.state.showResume ? "Hide" : "Show" }</button>
                </h3>

              </div>
                <div className="printButton">
                  <button href="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" download="https://github.com/adamjweil/PersonalWebsite/files/1756864/Resume_AdamWeil.pdf" bsStyle="info" bsSize="large" style={{fontSize:'1.2rem',width:'150px',alignItems:'cemter',height:'50px;'}}>Download (PDF)</button>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
