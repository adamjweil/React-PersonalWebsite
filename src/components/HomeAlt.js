import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Label, Button, Container, Col, Row, Card, CardHeader, CardTitle, CardBlock, CardText, Button, CardColumns, CardSubtitle, CardBody, Collapse } from 'reactstrap';

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
      <Container>
        <Col md="3">
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
                <p style={{textDecoration: '', marginBottom: '0px', marginLeft: '10px'}}>
                <strong>SKILLSETS</strong>
                </p>
              <span style={{fontSize: '13px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
                Project Management, Web, Software, and App Development, Overall Business Strategy / Direction, Finance, Accounting, Financial Markets/Instruments, Real Estate
              </span>


              </div>
            </div>
            <hr />
            <div class="row">
              <div className="strenths">
                <p style={{textDecoration: '', marginBottom: '0px', marginLeft: '10px'}}>
                  <strong>STRENGTHS</strong>
                </p>
                <div style={{fontSize: '13px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
                  Strong leadership qualities, Analytical and problem solving skills, Excel at communication and team buiilding, Organized, & extremely focused on time management and overall productivity
                </div>
              </div>
            </div>

            {/*
            <hr />

            <div class="row">
              <div className="goals">
              <p style={{textDecoration: 'underline', marginBottom: '3px', marginLeft: '10px'}}>
                GOALS:
              </p>
              <span style={{fontSize: '12px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
                xyz, xyz, xyz, xyz, xyz, xyz, xyz, xyz, xyz, xyz, xyz,
              </span>
              </div>
            </div>
            */}
          </div>


          <div className="profile-text">
          <div className="row">
            <h3 style={{textDecoration: '', color: 'grey', opacity: 0.4}}>
              Professional Background
            </h3>
          </div>
          <div className='prof-content' style={{marginLeft: '10px'}}>


            <div className="row" style={{marginBottom: '-5px'}}>
              <p>
                Adam Weil relishes a challenge and excels at bringing his diverse array of skills to each situation. Driven by a strong entrepreneurial personality, Adam thrives at generating and applying unique approaches to solve complex problems.
              </p>
            </div>
              <div className="row" style={{marginBottom: '-5px'}}>
              <p>
                Having studied business in college, worked on both the buy and sell side for a combination of 5 yrs (during which he earned his CFA designation, by choice), while currently playing a vital role on his high school Alma Matter’s Board, is it safe to say that Adam has a very strong background with financial markets.
              </p>
            </div>
              <div className="row" style={{marginBottom: '-5px'}}>
              <p>
                During his time working as a trader on Apex’s Event Driven team, Adam became increasingly passionate about, and enthusiastic about the role of technology, and its growing impact on so many sectors. His hobby of basic HTML and website development soon turned into much more.
              </p>
            </div>
              <div className="row" style={{marginBottom: '-5px'}}>
              <p>
                Adam made the decision to leave Apex, and spent the next year attending an intensive Fullstack Web & Software development program at Dev Bootcamp, in downtown NYC. Through the completion of this program Adam's proficiency as a developer grew exponentially.
              </p>
            </div>
            <div className="row" style={{marginBottom: '-5px'}}>
              <p>
                Upon completion of the program, Adam joined a mid-sized (~100 ppl), growing company called MezocliQ, as a Data Architect. After spending about six months integrating himself into the company, he was able to quickly increase communication between the Product and the Engineering teams. The decision was then made, that for the next six months he would split his time between managing projects and continuing to design systems on Data Architecture team.
              </p>
            </div>
            <div className="row" style={{marginBottom: '-5px'}}>
              <p>
                Through his exposure to this new role, Adam quickly saw that his previous experience gave him a competitive advantage when it came to managing projects and communicating with teams across the company. After a full year at MezocliQ, he took on the role of Project Manager full time. He excelled in this position because interfacing with engineers came extremely easily to him, due to the software and coding specific knowledge he had since acquired, combined with his ability to easily identify where opportunistic business situations presented themselves.
              </p>
            </div>
          </div>
            <div className="row">
              <h3 style={{textDecoration: '', color: 'grey', opacity: 0.4}}>
                Personal Interests
              </h3>
            </div>
            <div className='prof-content' style={{marginLeft: '10px'}}>
              <div className="row">
                <p>
                  In addition to his passion and involvement in the tech community, Adam actively participates in several other pursuits. As mentioned above, he is a Chartered Financial Analyst, and volunteers his time in support of various CFA programs. He maintains a very strong relationship with his High School alma mater, Carrabassett Valley Academy, and is an active member of their Board.
                </p>
              </div>
              <div className="row">
                <p>
                  In his leisure time, he enjoys traveling, playing golf, snowboarding, water sports, paragliding (new hobby), building and repairing motorcycles (and riding them, of course…), and spending time with friends and family
                </p>
              </div>
            </div>
          </div>

          <div className="resume-view">
            <div className="row">
              { this.state.showResume ? <Resume /> : null }
            </div>
          </div>

        </div>
        <Footer />
      </Container>
    );
  }
}

export default Home;
