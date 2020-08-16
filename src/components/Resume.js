import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
              <a className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5081397/Resume.pdf" download >
                <span style={{marginRight: '20px'}}>Download (PDF)</span>
              </a>
          
              <div>
              <img src="https://user-images.githubusercontent.com/25589910/90344152-e2460a80-dfe4-11ea-8c64-daae7ef84070.png" className="resumeToPrint" media="print"></img>
            </div>
          </div>

    );
  }
}

export default Resume;
