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
            <a className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/6407182/Resume_aw.pdf" download >
              <span style={{marginRight: '20px'}}>Download (PDF)</span>
            </a>
          </Col>
            <Row>
                <span style={{marginLeft: '100px'}}><img src="https://user-images.githubusercontent.com/25589910/116735875-1d466d80-a9bd-11eb-9b89-37f77c1ba466.png" className="resumeToPrint" media="print"></img></span>
            </Row>
          <Col md="1"></Col>
        </Row>
        </div>
    </Container>


    );
  }
}

export default Resume;
