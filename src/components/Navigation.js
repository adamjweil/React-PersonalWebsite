import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" href="/">
            <img src="https://user-images.githubusercontent.com/25589910/90346889-a4ec7780-dffa-11ea-85a1-01170b4b1f0d.png" width="40" height="40" className="d-inline-block align-top" alt="" />
          </a>
          <ul className="nav nav-pills justify-content-end">
{/*
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">CONTACT ME</NavLink>
          </li>
  */}

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/product-mgr">PRODUCT MANAGER</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/resume">R&Eacute;SUM&Eacute; </NavLink>
          </li>

          {/*
          <li className="nav-item">
          <NavLink className="nav-link" exact to="/interests">INTERESTS</NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" exact to="/interests">INTERESTS</NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" exact to="/CONTACT">CONTACT</NavLink>
          </li>
          */}

          <li className="nav-item">
            <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <NavLink className="nav-link" to="/Projects">PROJECTS</NavLink>
                <DropdownToggle caret color="dark" />
                <DropdownMenu>
                  <DropdownItem header>Projects</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    <NavLink to="/Projects">
                      <div onClick={this.props.toggleCoinProject}>
                        Coin'Stache
                      </div>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/Projects">
                      <div onClick={this.props.toggleEatProject}>
                        Adam's Eat & Review
                      </div>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/Projects">
                      <div onClick={this.props.toggleInstaProject}>
                        React-InstaClone
                      </div>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/Projects">
                      <div onClick={this.props.toggleScrapeProject}>
                        Page Scraper
                      </div>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/Projects">
                      <div onClick={this.props.toggleAltSetup}>
                        Alt Setup
                      </div>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Hi, I'm Adam</NavLink>
          </li>

          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
