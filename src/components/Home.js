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
              <h5><span className="emailbadge badge badge-secondary">
                {/*
                  <img src="https://user-images.githubusercontent.com/25589910/88819185-a827dc80-d18d-11ea-86bc-fde292910062.png" width="20px" height="18px" />
                    */}
                &nbsp;Email&nbsp;
              </span></h5>
              <a className="nav-link" href="mailto:adamjweil@gmail.com" style={{marginTop: '5px'}}>  AdamJWeil@gmail.com</a>
            </div>

            <div className="resume row justify-content-center">
              <h5><span className="resumebadge badge badge-secondary" >
              {/*
                <img src="https://user-images.githubusercontent.com/25589910/90219242-96704700-ddd3-11ea-8522-713e08dadb45.jpg" width="20px" height="18px" />
                  */}
                &nbsp;Résumé&nbsp;
              </span></h5>

              <button onClick={this.handleToggleResume} className="btn btn-outline-info" role="button">
                  { this.state.showResume ? "Hide" : "Show" }
              </button>



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
            <div className="row">
              <p>
                In addition to his passion and involvement in the tech community, Adam actively participates in a number of other pursuits. He is a certified Chartered Financial Analyst, and has volunteered his time in support of certain CFA Program activities. He maintains a very strong relationship with his High School alma mater, Carrabassett Valley Academy, and is an active Investment Committee member of schools endowment. In his leisure time he enjoys traveling, playing golf, snowboarding, water sports, and spending time with friends and family.
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
