import React, { Component } from 'react'
import './App.css';
import sketch1 from './sketch.js'
import P5Wrapper from 'react-p5-wrapper';
import {Router, Route, Link} from "react-router";

console.log("camhere")

class Canvas extends Component {

    render() {
        return (
            <div className = "App">
            
            <P5Wrapper sketch={sketch1} ></P5Wrapper>
            </div>
        );
    }
}


export default Canvas; 