import React, { Component } from 'react'
import sketch3 from '../p5sketches/sketch3.js'
import P5Wrapper from 'react-p5-wrapper';

class Game3 extends Component {

    render() {
        return (
            <div className = "App">
            
            <P5Wrapper sketch={sketch3} ></P5Wrapper>
            </div>
        );
    }
}


export default Game3; 