import React, { Component } from 'react';
import './App.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGame: '',
        }
    }

    render() {
        return (
            <div className="App">
                <div><img src='https://thumbs.gfycat.com/EverlastingComposedArchaeocete-small.gif'></img></div>
            </div>
        );
    }
}

export default Button;

