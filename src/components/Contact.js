import React, { Component, useState } from 'react';
// import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Col, Row, Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      messageText: ''
    }


}

render() {
  const [firstName, setFirstName] = React.useState("");
  const handleSubmit = (event) => {
      console.log(`
        Email: ${firstName}
      `);
      event.preventDefault();
    }
    
  function onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
  });
}
  return(
    <Container>
      <Row>
        <Col sm="12" md="12">
          <Alert style={{textAlign: 'center', marginTop: '10px'}}>
            <h3>Feel free to contact me for any reason!</h3>
          </Alert>
        </Col>
      </Row>
      <Row>

        <Col md="8" sm="12">
          <Form>
            <Row>
            <Col md="6" sm="6">
              <FormGroup>
               <Input
                onChange={e => setFirstName(e.target.value)}
                type="email"
                name="firstName"
                id="firstName"
                placeholder="First Name" />
              </FormGroup>
           </Col>
           </Row>

           <Row>
             <Col md="6" sm="6">
               <FormGroup>
                <Input
                onChange={e => onChange(e)}
                type="email"
                name="lastName"
                id="lastName"
                placeholder="Last Name" />
               </FormGroup>
             </Col>
           </Row>

           <Row>
              <Col md="12">
                <FormGroup>
                  <Label for="messageText">How can I help you?</Label>
                  <Input type="textarea" name="messageText" id="messageText" style={{height: 100}} />
                </FormGroup>
              </Col>
           </Row>
           <Row>
             <Col md="12" sm="6">
               <FormGroup>
                <Label>Best way to reach you back? (only need to fill out one..)</Label>
               </FormGroup>
             </Col>
           </Row>
           <Row>
             <Col md="6" sm="6">
               <FormGroup>
                <Label for="phoneNumber">Phone:</Label>
                <Input

                  type="phone"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="(123) 456-7891" />
               </FormGroup>
             </Col>
           </Row>
           <Row>
             <Col md="6" sm="6">
               <FormGroup>
                <Label for="emailAddress">Email:</Label>
                <Input type="phone" name="emailAddress" id="emailAddress" placeholder="joe@gmail.com" />
               </FormGroup>
             </Col>
           </Row>
           <Row>
             <Col md="6" sm="6">
              <FormGroup check row>
                 <Col sm={{ size: 10, offset: 2 }}>
                   <Button>Submit</Button>
                 </Col>
               </FormGroup>
             </Col>
           </Row>
           <Row>
            <Button>SEND</Button>
           </Row>
          </Form>
        </Col>
        <Col md="2" sm="0"></Col>


      </Row>
    </Container>

    );
  }
}

export default Contact;
