import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
              <a className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5130749/Resume.pdf" download >
                <span style={{marginRight: '20px'}}>Download (PDF)</span>
              </a>

              <div>
              <img src="https://user-images.githubusercontent.com/25589910/91322370-a9005e00-e78d-11ea-98ea-c464fa996675.png" className="resumeToPrint" media="print"></img>
            </div>
          </div>

    );
  }
}

export default Resume;
