import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://adamjweil.co"> AdamJWeil.co </a>
            </MDBContainer>
          </div>
        </MDBFooter>
    );
  }
}

export default Footer;
