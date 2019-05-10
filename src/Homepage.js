import React, { Component } from 'react'
import './App.css';
import Button from "./Button.js";
import List from "./Submit.js";
import sketch from './sketch.js'
import P5Wrapper from 'react-p5-wrapper';
import {Router, Route, Link} from "react-router-dom";
import Canvas from './p5sketch1';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelist: ['One', 'Two', 'Three'],
      gamepic: [
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/SOS_game.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3XjC-_weePb_km_u0EiQX-Mc3qACZ1zMAAunwLyUcXeYXVd0',
        'http://www.freeminesweeper.org/images/thumbnails/free-minesweeper-thumbnail.png',

      ],
      gamehref: [
        'https://www.facebook.com',
        'https://www.facebook.com',
        'https://www.postimees.ee'
      ],
      currentNR: 0,
      pressed: false,
      routerpics : [
          ['https://upload.wikimedia.org/wikipedia/commons/8/8e/SOS_game.png', '/SOS'],
          ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3XjC-_weePb_km_u0EiQX-Mc3qACZ1zMAAunwLyUcXeYXVd0','/madu']
      ]
    }
  }

  newpic = (nr) => {
    this.setState({
      currentNR: nr
    })
  }

  handleSubmit = (event) => {
    this.setState({
      pressed: !(this.state.pressed)
    })
    
  }

  showGames = () => {
    if (this.state.pressed){
      return (this.state.routerpics.map( (picture) => {return  <Link to = {picture[1]}><img className = 'pic' src = {picture[0]}></img></Link>}))
    }
  }


  render() {
    return (
      
      <div className="App">
        <h1>STUPID. SIMPLE. SILLY</h1>
        <p>Randomize a random game</p>
        <Button changepic={this.newpic} pics = {this.state.gamepic} url={this.state.gamehref} >Randomize</Button>
        <List className= 'display' handler={this.handleSubmit} ></List>
        {this.showGames()}
        <Route exact path='/SOS' component={Canvas} />
        <Route exact path='/madu' component={Canvas} />
        {/* P5 trial  */}
        {/* <P5Wrapper sketch={sketch} ></P5Wrapper> */}
      </div>
      
    );
  }
}

export default Homepage;
