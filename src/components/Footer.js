import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Label, Button , Row, Col, Container, Card, CardBody, Collapse, CardText, CardHeader, CardBlock} from 'reactstrap';

class Footer extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <Container>
      <Row>
        <Col md="12">
          <MDBFooter color="blue">

              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://adamjweil.co"> AdamJWeil.co </a>
              </MDBContainer>

          </MDBFooter>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
