import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src="https://s3.amazonaws.com/aw-personal-website-images/PW_Logo.png" width="40" height="40" class="d-inline-block align-top" alt="" />
          </a>
          <ul className="nav nav-pills justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        </header>
    )
  }
}

export default Navigation;
