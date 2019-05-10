import React, { Component } from 'react'
import './App.css';
import Button from "./Button.js";
import List from "./Submit.js";
import sketch from './sketch.js'
import P5Wrapper from 'react-p5-wrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Canvas from './p5sketch1';




class App extends Component {

  // -----------------------ROUTER STUFF -------------------------------------------------
  render() {
    return (
      <Router>
      <div className="App">

      <Route exact path = '/' component = {Homepage}/>
      <Route exact path='/SOS' component={Canvas} />
        <Route exact path='/madu' component={Canvas} />
      </div>
      </Router>
      
    );
  }
}

export default App;

