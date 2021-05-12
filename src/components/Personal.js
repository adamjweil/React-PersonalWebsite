import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Video from './Video';

class Personal extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <Container>
      <Row>
        <h2>Paragliding</h2>
      </Row>
      <Row>
            <Video />
      </Row>
      
      <Row>
      <Row style={{paddingTop: '30px',alignItems: 'center', textAlign: 'center'}}>
          <Col md="12">
          <footer>
            <span style={{}}> &copy; {new Date().getFullYear()} Copyright <a href="https://adamjweil.net"> AdamJWeil.net </a> <strong>-</strong> All Rights Reserved </span>
            </footer>
          </Col>
        </Row>
      </Row>
    </Container>

    );
  }
}

export default Personal;
