import React, { Component } from 'react'
import sketch2 from '../p5sketches/sketch2.js'
import P5Wrapper from 'react-p5-wrapper';

class Game2 extends Component {

    render() {
        return (
            <div className = "App">
            
            <P5Wrapper sketch={sketch2} ></P5Wrapper>
            </div>
        );
    }
}


export default Game2; 