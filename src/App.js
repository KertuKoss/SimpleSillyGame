import React, { Component } from 'react'
import './App.css';
import Button from "./Button.js";
import List from "./Submit.js";



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
      currentNR: 0  
    }
  }

  newpic = (nr) => {
    this.setState({
      currentNR: nr
    })
  }

  render() {
    return (
      <div className="App">
        <h1>STUPID. POINTLESS. SILLY</h1>
        <p>Randomize a random game</p>
        <Button changepic={this.newpic} pics = {this.state.gamepic} url={this.state.gamehref} >Randomize</Button>
        <List pics = {this.state.gamepic} url={this.state.gamehref} ></List>
      </div>
    );
  }
}

export default App;

