import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
// import HomeAlt from './components/HomeAlt';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Work from './components/Work';
import Resume from './components/Resume';
import Education from './components/Education';
import Interests from './components/Interests';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state =
    {
      activeProject: 0
    };
    this.toggleCoinProject = this.toggleCoinProject.bind(this);
    this.toggleEatProject = this.toggleEatProject.bind(this);
    this.toggleInstaProject = this.toggleInstaProject.bind(this);
    this.toggleScrapeProject = this.toggleScrapeProject.bind(this);
    this.toggleAltSetup = this.toggleAltSetup.bind(this);
  }
  toggleCoinProject = e =>
    this.setState({ activeProject: 0 });
  toggleEatProject = e =>
    this.setState({ activeProject: 1 });
  toggleInstaProject = e =>
    this.setState({ activeProject: 2 });
  toggleScrapeProject = e =>
    this.setState({ activeProject: 3 });
  toggleAltSetup = e =>
    this.setState({ activeProject: 4 });

  render() {
    return (
      <BrowserRouter className="container">
        <div className="">
          <Navigation
            activeProject={this.state.activeProject}
            toggleCoinProject={this.toggleCoinProject}
            toggleEatProject={this.toggleEatProject}
            toggleInstaProject={this.toggleInstaProject}
            toggleScrapeProject={this.toggleScrapeProject}
            toggleAltSetup={this.toggleAltSetup} />

            <Switch>
              <Route exact path="/" render={ () => <Home /> } />
              <Route exact path="/resume" render={ () => <Resume /> } />
              <Route exact path="/work" render={ () => <Work /> } />
              <Route exact path="/edu" render={ () => <Education /> } />
              <Route exact path="/interests" render={ () => <Interests /> } />

              {/*
                <Route exact path="/contact" render={ () => <Contact /> } />
                */}

              <Route path="/Projects" render={ () =>
                  <Projects
                    activeProject={this.state.activeProject}
                    toggleCoinProject={this.toggleCoinProject}
                    toggleEatProject={this.toggleEatProject}
                    toggleInstaProject={this.toggleInstaProject}
                    toggleScrapeProject={this.toggleScrapeProject}
                    toggleAltSetup={this.toggleAltSetup} /> } />

              <Route path="/Contact" render={ () => <Contact /> } />
            </Switch>
          </div>
      </BrowserRouter>

    );
  }
}

export default App;
