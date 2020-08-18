import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
              <a className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5092771/Resume.pdf" download >
                <span style={{marginRight: '20px'}}>Download (PDF)</span>
              </a>

              <div>
              <img src="https://user-images.githubusercontent.com/25589910/90564146-dd16c600-e172-11ea-901d-6d504d242fa6.png" className="resumeToPrint" media="print"></img>
            </div>
          </div>

    );
  }
}

export default Resume;
