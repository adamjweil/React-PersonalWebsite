import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

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
            <img src="https://s3.amazonaws.com/aw-personal-website-images/Logo_v2.png" width="40" height="40" className="d-inline-block align-top" alt="" />
          </a>
          <ul className="nav nav-pills justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <NavLink className="nav-link" to="/Projects">Projects</NavLink>
                  <DropdownToggle caret color="primary" />
                  <DropdownMenu>
                    <DropdownItem header>Projects</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                      <div onClick={this.props.toggleCoinProject}>
                        Coin'Stache
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={this.props.toggleEatProject}>
                        Adam's Eat & Review
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={this.props.toggleInstaProject}>
                        React-InstaClone
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={this.props.toggleScrapeProject}>
                        Page Scraper
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={this.props.toggleAltSetup}>
                        Alt Setup
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
              </ButtonDropdown>
            </li>

          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
