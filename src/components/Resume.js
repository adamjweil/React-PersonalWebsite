import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
              <a className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5142369/Resume.pdf" download >
                <span style={{marginRight: '20px'}}>Download (PDF)</span>
              </a>

              <div>
              <img src="https://user-images.githubusercontent.com/25589910/91567120-9cf1d900-e912-11ea-9833-8774bd2dbe88.png" className="resumeToPrint" media="print"></img>
            </div>
          </div>

    );
  }
}

export default Resume;
