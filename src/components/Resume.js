import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
            <img src="https://user-images.githubusercontent.com/25589910/39064622-27b37746-449d-11e8-8fc6-06ef67dfabf8.png" className="resumeToPrint" media="print"></img>
          </div>
    );
  }
}

export default Resume;
