import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
              <button className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5079462/Resume_aw.pdf" download >
                <span style={{marginRight: '20px'}}>Download (PDF)</span>
              </button>
              <div>
              <img src="https://user-images.githubusercontent.com/25589910/90321250-fc64e780-df15-11ea-8baf-3f2781315d47.png" className="resumeToPrint" media="print"></img>
            </div>
          </div>

    );
  }
}

export default Resume;
