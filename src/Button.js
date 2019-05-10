import React, { Component } from 'react';
import './App.css';
import {Router, Route, Link} from "react-router-dom";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picso: 'https://thumbs.gfycat.com/EverlastingComposedArchaeocete-small.gif',
            link: ''
        }
    }

    handleClick = (event) =>{
        let rand = Math.floor(Math.random()*this.props.pics.length)
        this.setState({
            picso: this.props.pics[rand][0],
            link: this.props.pics[rand][1]

        })
    } 


    render() {
        return (
            <div className="App">
            {/* <div><a href={this.state.link}><img className="pic" src={this.state.picso} alt="jumping question marks"></img></a></div> */}
            <div><Link to= {this.state.link}><img className = "pic" src = {this.state.picso}></img></Link></div>
            <button className = 'button' onClick = {this.handleClick}> Randomize</button>

            </div>

        );
    }
}

export default Button;

