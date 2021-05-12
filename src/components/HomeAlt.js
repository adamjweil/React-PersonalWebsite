import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Label, Button , Row, Col, Container, Card, CardBody, Collapse, CardText, CardHeader, CardBlock} from 'reactstrap';

import Footer from './Footer';
import Resume from './Resume';
import Video from './Video';

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
      <Col md="1"></Col>
        <Col md="4">
          <div className="profile-view">
          <Row>
            <div className="avatar-row">
              <img src="https://user-images.githubusercontent.com/25589910/88818074-47e46b00-d18c-11ea-8e3c-e90fa99b8622.jpg" width="360px" height="270px">
              </img>
            </div>
          </Row>
          <Row>
            
            <Col md="4">
              <a href="https://www.linkedin.com/in/adamjweil/" target="_blank" className="btn btn-sm btn-dark" role="button" aria-disabled="true" style={{marginBottom:"10px", opacity: .9}}>
                <img src="https://user-images.githubusercontent.com/25589910/88818435-b3c6d380-d18c-11ea-8ec5-a399392334f6.png" width="20px" height="18px"  />
                &nbsp;&nbsp;LinkedIn
              </a>
            </Col>

            <Col md="4">
              <a href="https://github.com/adamjweil" target="_blank" className="btn btn-sm btn-dark" role="button" aria-disabled="true" style={{opacity: .9}}>
                <img src="https://user-images.githubusercontent.com/25589910/88818581-dd7ffa80-d18c-11ea-950b-6dd5f47d2d8e.png" width="24px" height="20px" />
                &nbsp;&nbsp;GitHub&nbsp;
              </a>
            </Col>
            <Col md="4">
              <a href="https://www.youtube.com/channel/UC2NfbZ4NzqUzazV--cprnQA" target="_blank" className="btn btn-sm btn-dark" role="button" aria-disabled="true" style={{ opacity: .9}}>
                <img src="https://user-images.githubusercontent.com/25589910/118029373-1a8b3700-b332-11eb-81ba-bc83cdaf518a.png" width="15px" height="18px"  />
                &nbsp;YouTube
              </a>
            </Col>
        
            </Row>
            <Row>
            <Col md="4">
              <a href="mailto:adamjweil@gmail.com" class="btn btn-sm btn-dark" role="button" aria-disabled="true" style={{marginBottom:"10px", opacity: .9}}>
                <img src="https://user-images.githubusercontent.com/25589910/92648908-32e51680-f2b8-11ea-896e-29d568d259ae.png" width="20px" height="18px"  />
                &nbsp;&nbsp;Email
              </a>
            </Col>
            <Col md="6">
              <a onClick={this.handleToggleResume} target="_blank" class="btn btn-sm btn-dark" role="button" aria-disabled="true" style={{opacity: .9}}>
              <img src="https://user-images.githubusercontent.com/25589910/92650620-a556f600-f2ba-11ea-8ff0-02cdef8f5cc3.png" width="20px" height="18px" />
              <span style={{color: 'white'}}>  { this.state.showResume ? "Hide Résumé" : "Show Résumé" }</span>
              </a>
            </Col>
          </Row>
          <Row>

          </Row>
 

          <Row>
            <hr />
          </Row>

          <Row>
            <p style={{fontSize: '18px', textDecoration: '', marginBottom: '0px', marginLeft: '10px'}}>
            <strong>SKILL SETS</strong>
            </p>
            <span style={{fontSize: '13px', marginTop: '5px', marginLeft: '15px', marginRight: '15px', marginBottom: "10px"}}>
              Product Management
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Web, Software, and App Development
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Project Management
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Overall Business Strategy/Direction
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Finance
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Accounting
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Financial Markets/Instruments
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Real Estate
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Technology
              <img src="https://user-images.githubusercontent.com/25589910/116759746-192c4700-a9e1-11eb-9232-d0e4142aa3e2.png" width="10px" height="15px" style={{}} />
              Fin-Tech
            </span>
          </Row>
          <Row>
            <div className="strenths">
              <p style={{fontSize: '18px', textDecoration: '', marginBottom: '0px', marginLeft: '10px'}}>
                <strong>STRENGTHS</strong>
              </p>
              <div style={{fontSize: '13px', marginTop: '5px', marginLeft: '15px', marginRight: '15px'}}>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> Ability to prioritize while maintaining tight deadlines </p>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> Passionate about building Products & Services that solve problems </p>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> A natural leader; versatile and forward thinking... always willing to be the <em>'Devil's Advocate'</em> in the room </p>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> Strong leadership qualities</p>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> Clear, effective communicator; Strongly encourages open channels of communication within his team / organization </p>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> Analytically inclinded; Objectives & Key Metrics are the cornerstone of measuring and optimizing the team's output </p>
              <p style={{marginBottom: '0px'}}><img src="https://user-images.githubusercontent.com/25589910/116758289-b9806c80-a9dd-11eb-9a57-1e050dc87980.png" width="10px" height="10px" style={{marginTop:"-3px"}} /> Organized, with a primary focus on overall productivity (including time and resource management, amoung others)</p>
              </div>
            </div>
            </Row>
          </div>
        
          </Col>

        <Col md="0"></Col>
        <Col md="7">
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
            {/* <Col md="4"></Col> */}
            <Col style={{alignItems: 'center'}}>
              {this.state.showResume ? <Resume /> : ""}
            </Col>
            {/* <Col md="2"></Col> */}
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Video />
          </Row>
         <Row style={{paddingTop: '30px',alignItems: 'center', textAlign: 'center'}}>
          <Col md="12">
          <footer>
            <span style={{}}> &copy; {new Date().getFullYear()} Copyright <a href="https://adamjweil.net"> AdamJWeil.net </a> <strong>-</strong> All Rights Reserved </span>
            </footer>
          </Col>
        </Row>

      
    </Container>
    );
  }
}

export default Home;
