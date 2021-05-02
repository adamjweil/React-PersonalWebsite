import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

class ProductMgr extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <Container>
      <Row>
        <Col md="1"></Col>
        <Col md="10">
          <div className="product-mgr">

            Product Manager
          </div>
        </Col>
      </Row>
    </Container>

    );
  }
}

export default ProductMgr;
