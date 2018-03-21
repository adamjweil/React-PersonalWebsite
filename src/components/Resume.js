import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="container-fluid">
            <img src="https://user-images.githubusercontent.com/25589910/36648239-a35f14e0-1a5e-11e8-8b14-9f236b63deb8.png" className="resumeToPrint" media="print"></img>
          </div>
    );
  }
}

export default Resume;
