import React, { Component } from 'react'
import sketch4 from '../p5sketches/sketch4.js'
import P5Wrapper from 'react-p5-wrapper';

class Game4 extends Component {

    render() {
        return (
            <div className = "App">
            
            <P5Wrapper sketch={sketch4} ></P5Wrapper>
            </div>
        );
    }
}


export default Game4; 