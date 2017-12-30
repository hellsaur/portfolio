import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Design from './components/Design';
import Web from './components/Web';
import About from './components/About';
import {BrowserRouter as  Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
              <Header />
              <Route exact path = "/" render={()=> < Home />} />
              <Route exact path = "/design" render={()=> < Design />} />
              <Route exact path = "/web" render={()=> < Web />} />
              <Route exact path = "/about" render={()=> < About />} />

            </div>
      </Router>
    );
  }
}

export default App;

