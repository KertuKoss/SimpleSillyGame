import React, { Component } from 'react'
import './App.css';
import Button from "./Button.js";
import List from "./Submit.js";
import {Router, Route, Link} from "react-router-dom";
import pic1 from "./pics/game1.png";
import pic2 from "./pics/game2.png";
import pic3 from "./pics/game3.png";
import pic4 from "./pics/game4.png";



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      pic_and_link : [
          [ pic1 ,'/game1'],
          [ pic2,'/game2'],
          [ pic3, '/game3'],
          [ pic4, '/game4']
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
      return (this.state.pic_and_link.map( (picture) => {return  <Link to = {picture[1]}><img className = 'pic' src = {picture[0]} ></img></Link>}))
    }
  }


  render() {
    return (
      
      <div className="App">
        <h1>STUPID. SIMPLE. SILLY</h1>
        <p>Randomize a random game</p>
        <Button changepic={this.newpic} pics = {this.state.pic_and_link}  >Randomize</Button>
        <List  handler={this.handleSubmit} ></List>
        <br></br>
        <div className= 'display'>
        {this.showGames()}
        </div>
      </div>
      
    );
  }
}

export default Homepage;
