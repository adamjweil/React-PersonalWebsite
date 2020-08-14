import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
            <img src="https://user-images.githubusercontent.com/25589910/90212208-c530f200-ddc0-11ea-8cb8-8588ddbe7b43.png" className="resumeToPrint" media="print"></img>
          </div>
    );
  }
}

export default Resume;
