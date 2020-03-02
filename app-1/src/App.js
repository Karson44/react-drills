import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;


import "./App.css"

import React, {Component} from 'react';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      mattBelt: 4000,
      mattHat: 2,
    }
  }
  mattBelt = () =>{
    this.setState({
      mattBelt: this.state.mattBelt / 2
    })
  }
  mattHat = () =>{
    this.setState({
      mattHat: this.state.mattHat * 2
    })
  }
  render(){
    return(
      <div>
        <div className="matt" onClick={() => this.mattBelt()}>
          {this.state.mattBelt}
        </div>
        <div className="karson" onClick={() => this.mattHat()}>
          {this.state.mattHat}
        </div>
      </div>
    )
  }
}