import React, { Component } from 'react';
import './App.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {   
        }
    }

    HandleClick = (event) => {
         //console.log('here')
    //     //in progress
    // //    return (<div>
    // //         <img src ={this.props.pics[0]} href = {this.props.url[0]}> </img>
    // //         <img src ={this.props.pics[1]} href = {this.props.url[1]}> </img>
    // //         <img src ={this.props.pics[1]} href = {this.props.url[2]}> </img>
    // //     </div>)

    //     return (this.props.pics.map( picture => {return <div className='box'><img>{picture}</img></div>}))
        return (this.props.handler(event))


    }

    // pics and url 

    render() {
        return (
            <div className="App">
            
            <button className= 'button' onClick = {this.HandleClick}> Entire list </button>
            </div>

        );
    }
}

export default List;