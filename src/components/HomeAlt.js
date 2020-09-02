import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Label, Button , Row, Col, Container, Card, CardBody, Collapse, CardText, CardHeader, CardBlock} from 'reactstrap';

import Footer from './Footer';
import Resume from './Resume';

class Home extends Component {
  constructor() {
    super();
    this.state =
      {
    showResume: false,
    collapseProfessional: true,
    collapsePersonal: true
  }
  this.handleToggleResume = this.handleToggleResume.bind(this);
  this.toggleProfessional = this.toggleProfessional.bind(this);
  this.togglePersonal = this.togglePersonal.bind(this);
}
toggleProfessional() {
  this.setState({
    collapseProfessional: !this.state.collapseProfessional
  });
}
togglePersonal() {
  this.setState({
    collapsePersonal: !this.state.collapsePersonal
  });
}

handleToggleResume = e =>
this.setState(prevState => ({
  showResume: !prevState.showResume
}));

render() {
  return(

    <Container>
      <Row>
        <Col md="4">
          <div className="profile-view">
          <Row>
            <div className="avatar-row">
              <img src="https://user-images.githubusercontent.com/25589910/88818074-47e46b00-d18c-11ea-8e3c-e90fa99b8622.jpg" width="360px" height="270px">
              </img>
            </div>
          </Row>
          <Row>
            <Col md="12">
              <a href="https://www.linkedin.com/in/adamjweil/" target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true" style={{marginBottom:"10px"}}>
                <img src="https://user-images.githubusercontent.com/25589910/88818435-b3c6d380-d18c-11ea-8ec5-a399392334f6.png" width="20px" height="18px"  />
                &nbsp;&nbsp;LinkedIn
              </a>
            </Col>
            <Row>
            </Row>
            <Col md="12">
              <a href="https://github.com/adamjweil" target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true">
                <img src="https://user-images.githubusercontent.com/25589910/88818581-dd7ffa80-d18c-11ea-950b-6dd5f47d2d8e.png" width="24px" height="20px" />
                &nbsp;&nbsp;GitHub&nbsp;
              </a>
            </Col>
          </Row>

          <Row>
            <h5><span className="emailbadge badge badge-secondary" style={{height: '27px', border: '2px outset #A9A9A9', marginLeft: '20px'}}>
              &nbsp;Email&nbsp;
            </span></h5>
            <a className="nav-link" href="mailto:adamjweil@gmail.com" style={{marginTop: '1px', fontSize: '18px', fontWeight: '600'}}>  AdamJWeil@gmail.com</a>
          </Row>
          <Row>
          <h5>
            <span className="resumebadge badge badge-secondary" style={{height: '27px', border: '2px outset #A9A9A9', marginLeft: '20px'}} >
              &nbsp;Résumé&nbsp;
            </span>
          </h5>

          <button onClick={this.handleToggleResume} className="btn btn-outline-info" role="button" style={{width: "75px", height: "30px", marginLeft: "30px", marginTop: '10px'}} >
              <span style={{marginTop: '-100px'}}>{ this.state.showResume ? "Hide" : "Show" }</span>
          </button>

          </Row>

          <Row>
            <p style={{textDecoration: '', marginBottom: '0px', marginLeft: '10px'}}>
            <strong>SKILL SETS</strong>
            </p>
            <span style={{fontSize: '13px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
              Product Management -- Web, Software, and App Development -- Project Management -- Overall Business Strategy/Direction -- Finance -- Accounting -- Financial Markets/Instruments -- Real Estate
            </span>
          </Row>
          <Row>
            <div className="strenths">
              <p style={{textDecoration: '', marginBottom: '0px', marginLeft: '10px'}}>
                <strong>STRENGTHS</strong>
              </p>
              <div style={{fontSize: '13px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
                <p style={{marginBottom: '0px'}}><strong>-></strong> Strong leadership qualities</p>
                <p style={{marginBottom: '0px'}}><strong>-></strong> Analytically inclinded; robust problem solving skills</p>
                <p style={{marginBottom: '0px'}}><strong>-></strong> Excel at team building and creating clear open lines of communication</p>
                <p style={{marginBottom: '0px'}}><strong>-></strong> Organized, and extremely focused on overall productivity (including time and resource management, amoung others)</p>
              </div>
            </div>
            </Row>
          </div>
          </Col>


        <Col md="8">
        <Card style={{borderColor: '#DFDFE1', marginTop: "15px"}}>
          <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '.7'}}>
          <img src="https://user-images.githubusercontent.com/25589910/91918504-154cf700-ec91-11ea-9b75-68821a74f273.png" style={{ color: 'dark', height: "30px",  marginRight: "15px"}} />
           Professional Background
           {/* */}
           <Button
             style={{opacity: '1', marginLeft: '20px', borderRadius: '5px', fontSize: '12px', fontWeight: '700'}}
             color="success"
             size="sm"
             onClick={this.toggleProfessional}>
             { this.state.collapseProfessional ? "Show Brief" : "Show Full" }
           </Button>
           {/*   */}
         </CardHeader>
           <CardBlock>
             <Collapse isOpen={this.state.collapseProfessional}>
               <CardText>
                 <Row style={{margin: '5px 5px 15px'}}>
                  Adam Weil relishes a challenge and excels at bringing his diverse array of skills to each situation. Driven by a strong entrepreneurial personality, Adam thrives at generating and applying unique approaches to solve complex problems.
                 </Row>

                 <Row style={{margin: '5px 5px 15px'}}>
                 Having studied business in college, worked on both the buy and sell side for a combination of 5 yrs (during which he earned his CFA designation, outside of work), while remaining actively involved in his High School Alma Matter’s Board, is it safe to say that Adam has a very strong background with financial markets.
                 </Row>

                 <Row style={{margin: '5px 5px 15px'}}>
                 During his time working as a trader on Apex’s Event Driven team, Adam became increasingly passionate about, and enthusiastic about the role of technology, and it's growing impact on so many sectors. His hobby of basic HTML and website development soon turned into much more.
                 </Row>

                 <Row style={{margin: '5px 5px 15px'}}>
                 Adam made the decision to leave Apex, and spent the next year attending an intensive Fullstack Web & Software development program at Dev Bootcamp, in downtown NYC. Through the completion of this program Adam's proficiency as a developer grew exponentially.
                 </Row>

                 <Row style={{margin: '5px 5px 15px'}}>
                 After finishing his final project at DevBootcamp, Adam utilized the new set of skills he had picked up over the last year, and put them to use. He quickly joined a mid-sized (~100 ppl), growing, tech company called MezocliQ, as a Data Architect. After spending roughly six months integrating himself into the company, he was able to quickly increase communication between the Product and the Engineering teams. The decision was then made, that for the next six months he would split his time between managing projects and continuing to design systems on Data Architecture team.
                 </Row>

                 <Row style={{margin: '5px 5px 15px'}}>
                   Through his exposure to this new role, Adam quickly saw that his previous experience gave him a competitive advantage when it came to managing projects and communicating with teams across the company. After a full year at MezocliQ, he took on the role of Project Manager full time. He excelled in this position because interfacing with engineers came extremely easily to him, due to the software and coding specific knowledge he had since acquired, combined with his ability to easily identify where opportunistic business situations presented themselves.
                 </Row>
               </CardText>
             </Collapse>

             <Collapse isOpen={!this.state.collapseProfessional}>
               <CardText>
                 <Row style={{margin: '5px 5px 10px'}}>
                    After gratuating from GWU in 2011 with his BBA in Finance, Adam spent ~2.5 yrs working at Nomura as both a Credit and Equity Analyst. He participated in a rotational program, which allowed him to work with various teams across both Trading Floors.
                 </Row>
                 <Row style={{margin: '5px 5px 10px'}}>
                    In 2014, along with completing the CFA Program, Adam started a new job at Apex Capital, focused on managing a (long / short) portfolio of US Equities. Over the course of the next 2 and a half years, he gained immense experience and exposure to market dynamics, while working as a an Executing Trader on Apex's Event Driven strategy/team.
                  </Row>
                     <Row style={{margin: '5px 5px 10px'}}>
                    Adam has spent the last 4 - 5 years working in technology, specifically as a Product Manager, Data Architecht, and Software Engineer.
                  </Row>
               </CardText>
             </Collapse>

           </CardBlock>
         </Card>

         <Card style={{borderColor: '#DFDFE1', marginTop: '10px'}}>
           <CardHeader style={{ backgroundColor: '#6c757d', color: 'white', fontSize: '18px', fontWeight: '700', opacity: '.7'}}>
           <img src="https://user-images.githubusercontent.com/25589910/91918553-33b2f280-ec91-11ea-90df-2519b383b426.png" style={{ color: 'dark', height: "30px",  marginRight: "15px"}} />
            Personal Interests
            {/*
            <Button
              style={{opacity: '1', marginLeft: '20px', borderRadius: '5px', fontSize: '12px', fontWeight: '700'}}
              color="success"
              size="sm"
              onClick={this.togglePersonal}>
              { this.state.collapsePersonal ? "Show Brief" : "Show Full" }
            </Button>
            */}
          </CardHeader>
            <CardBlock>
              <Collapse isOpen={this.state.collapsePersonal}>
                <CardText>
                  <Row style={{margin: '5px 5px 15px'}}>
                    In addition to his passion and involvement in the tech community, Adam actively participates in several other pursuits. As mentioned above, he is a Chartered Financial Analyst, and volunteers his time in support of various CFA programs. He maintains a very strong relationship with his High School alma mater, Carrabassett Valley Academy, and is an active member of their Board.
                  </Row>
                  <Row style={{margin: '5px 5px 15px'}}>
                    In his leisure time, he enjoys traveling, playing golf, snowboarding, water sports, paragliding (new hobby), building and repairing motorcycles (and riding them, of course…), and spending time with friends and family.
                  </Row>
                  <Row style={{margin: '5px 5px 15px'}}>
                    Adam is always interested and excited to talk about new ideas, or an iteration of an old idea, that could bear fruit. He isn't afraid to fail, as long as failure is worth the lesson. On that same note, when he sees risk moving in his favor, he doesn't hesitate make and effectuate decisions.
                  </Row>
                </CardText>
              </Collapse>

              <Collapse isOpen={!this.state.collapsePersonal}>
                <CardText>
                  <Row style={{margin: '5px 5px 10px'}}>
                    Brief Description   (Personal Interests)
                  </Row>
                </CardText>
              </Collapse>

            </CardBlock>
          </Card>
          </Col>
         </Row>
          <Row>
            <Col>
              {this.state.showResume ? <Resume /> : ""}
            </Col>
          </Row>
         <Row>
          <Col md="12">
          <span style={{textAlign: 'center'}}>  &copy; {new Date().getFullYear()} Copyright: <a href="https://adamjweil.net"> AdamJWeil.net </a></span>
          </Col>
        </Row>
    </Container>
    );
  }
}

export default Home;
