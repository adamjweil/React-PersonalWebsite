import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container">
        <div className="">
          <Navigation />
            <Switch>
              <Route exact path="/" render={ () => <Home /> } />
              <Route path="/Projects" render={ () => <Projects /> } />
              <Route path="/Contact" render={ () => <Contact /> } />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
