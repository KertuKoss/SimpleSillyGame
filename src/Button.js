import React, { Component } from 'react';
import './App.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picso: 'https://thumbs.gfycat.com/EverlastingComposedArchaeocete-small.gif',
            phref: ''
        }
    }

    handleClick = (event) =>{
        let rand = Math.floor(Math.random()*this.props.pics.length)
        this.setState({
            picso: this.props.pics[rand],
            phref: this.props.url[rand]

        })
        return this.props.changepic(rand)
    } 


    render() {
        return (
            <div className="App">
            <div><a href={this.state.phref}><img className="pic" src={this.state.picso} alt="jumping question marks"></img></a></div>
            
            <button className = 'button' onClick = {this.handleClick}> Randomize</button>

            </div>

        );
    }
}

export default Button;

