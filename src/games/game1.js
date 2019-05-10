import React, { Component } from 'react'
import sketch1 from '../p5sketches/sketch1.js'
import P5Wrapper from 'react-p5-wrapper';

class Game1 extends Component {

    render() {
        return (
            <div className = "App">
            
            <P5Wrapper sketch={sketch1} ></P5Wrapper>
            </div>
        );
    }
}


export default Game1; 