import React, { Component } from 'react'
import './App.css';
import Button from "./Button.js";
import List from "./Submit.js";
import {Router, Route, Link} from "react-router-dom";



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      pic_and_link : [
          ['https://upload.wikimedia.org/wikipedia/commons/8/8e/SOS_game.png', '/game1'],
          ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3XjC-_weePb_km_u0EiQX-Mc3qACZ1zMAAunwLyUcXeYXVd0','/game2'],
          ['https://upload.wikimedia.org/wikipedia/commons/8/8e/SOS_game.png', '/game3'],
          ['https://upload.wikimedia.org/wikipedia/commons/8/8e/SOS_game.png', '/game4']
      ]
    }
  }


  handleSubmit = (event) => {
    this.setState({
      pressed: !(this.state.pressed)
    })
    
  }

  showGames = () => {
    if (this.state.pressed){
      return (this.state.pic_and_link.map( (picture) => {return  <Link to = {picture[1]}><img className = 'pic' src = {picture[0]}></img></Link>}))
    }
  }


  render() {
    return (
      
      <div className="App">
        <h1>STUPID. SIMPLE. SILLY</h1>
        <p>Randomize a random game</p>
        <Button changepic={this.newpic} pics = {this.state.pic_and_link}  >Randomize</Button>
        <List className= 'display' handler={this.handleSubmit} ></List>
        {this.showGames()}
      </div>
      
    );
  }
}

export default Homepage;
