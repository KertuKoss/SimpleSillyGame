import React, { Component } from 'react'
import './App.css';
import Button from "./Button.js";
import List from "./Submit.js";
import sketch from './sketch.js'
import P5Wrapper from 'react-p5-wrapper';
import {Router, Route, Link} from "react-router";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelist: ['One', 'Two', 'Three'],
      gamepic: [
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/SOS_game.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3XjC-_weePb_km_u0EiQX-Mc3qACZ1zMAAunwLyUcXeYXVd0',
        'http://www.freeminesweeper.org/images/thumbnails/free-minesweeper-thumbnail.png'
      ],
      gamehref: [
        'https://www.google.com',
        'https://www.facebook.com',
        'https://www.postimees.ee'
      ],
      currentNR: 0,
    }
  }

  newpic = (nr) => {
    this.setState({
      currentNR: nr
    })
  }

  handleSubmit = (event) => {
    console.log("here2")
    return (this.state.gamepic.map( (picture) => {return <img src = {picture}></img>}))
  }

  render() {
    return (
      
      <div className="App">
        <h1>STUPID. POINTLESS. SILLY</h1>
        <p>Randomize a random game</p>
        <Button changepic={this.newpic} pics = {this.state.gamepic} url={this.state.gamehref} >Randomize</Button>
        <List className= 'display' handler={this.handleSubmit} ></List>
        {/* <div>
        {this.state.gamepic.map( (picture) => {return <img src = {picture}></img>})}
        </div> */}
      {/* {this.showGame()} */}
        {/* P5 trial  */}
        {/* color={this.state.color} */}
        <P5Wrapper sketch={sketch} ></P5Wrapper>
      </div>
      
    );
  }
}

export default App;

