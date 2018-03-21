import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/lib/Button';

class Footer extends Component {
  constructor() {
    super();
  }

render() {
  return(
    <footer className="footer">
      <div className="container">
        <p className="text-muted">Test</p>
      </div>
    </footer>
    );
  }
}

export default Footer;
