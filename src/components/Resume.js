import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Resume extends Component {
  constructor() {
    super();
  }

render() {
  return(
          <div className="resume-container">
              <button className="btn btn-outline-info" role="button" href="https://github.com/adamjweil/React-PersonalWebsite/files/5072580/Resume_aw.pdf" download >
                <span style={{marginRight: '20px'}}>Download (PDF)</span>
              </button>
              <div>
              <img src="https://user-images.githubusercontent.com/25589910/90212208-c530f200-ddc0-11ea-8cb8-8588ddbe7b43.png" className="resumeToPrint" media="print"></img>
            </div>
          </div>

    );
  }
}

export default Resume;
