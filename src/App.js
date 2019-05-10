import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Game1 from './games/game1';
import Game2 from './games/game2';
import Game3 from './games/game3';
import Game4 from './games/game4';




class App extends Component {

  // -----------------------ROUTER STUFF -------------------------------------------------
  render() {
    return (
      <Router>
      <div className="App">

      <Route exact path = '/' component = {Homepage}/>
      <Route exact path='/game1' component={Game1} />
      <Route exact path='/game2' component={Game2} />
      <Route exact path='/game3' component={Game3} />
      <Route exact path='/game4' component={Game4} />


      </div>
      </Router>
      
    );
  }
}

export default App;

