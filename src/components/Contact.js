import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

class Contact extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <Container>
      <Row>
        <Col sm="12" md="1">
      
          <div className="project-links row">
            <button type="button"
              className="btn btn-dark" >
              Eat & Review
            </button>
          </div>
          <div className="project-links row">
            <button type="button"
              className="btn btn-dark" >
              Eat & Review
            </button>
          </div>

        </Col>
      </Row>
    </Container>

    );
  }
}

export default Contact;
