import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container, ButtonGroup, Button, Alert } from 'reactstrap';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(

    <Container>
      <div className="resume-container">

        <Row>
        <Col md="1"></Col>
          <Col md="10">
            <a className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5142369/Resume.pdf" download >
              <span style={{marginRight: '20px'}}>Download (PDF)</span>
            </a>
          </Col>
            <Row>
                <span style={{marginLeft: '100px'}}><img src="https://user-images.githubusercontent.com/25589910/91567120-9cf1d900-e912-11ea-9833-8774bd2dbe88.png" className="resumeToPrint" media="print"></img></span>
            </Row>
          <Col md="1"></Col>
        </Row>
        </div>
    </Container>


    );
  }
}

export default Resume;
