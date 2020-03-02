import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      userInput: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  changeHandler(val) {
    this.setState({userInput: val})
  }
  handleAddTask() {
    this.setState({list: [...this.state.list , this.state.userInput], input: ''})
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input val={this.state.userInput} placeholder="Enter new task" onChange={(e) => this.changeHandler(e.target.value)}/>
          <button onClick={this.handleAddTask}>Add</button>
        </div>
      {list}
      </div>
    )
  }
}
export default App

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Todo from "./Todo";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       list: [],
//       input: ""
//     };

//     this.handleAddTask = this.handleAddTask.bind(this);
//   }

//   handleInputChange(value) {
//     this.setState({ input: value });
//   }

//   handleAddTask() {
//     this.setState({
//       list: [...this.state.list, this.state.input],
//       input: ""
//     });
//   }

//   render() {
//     let list = this.state.list.map((element, index) => {
//       return <Todo key={index} task={element} />;
//     });

//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>

//         <div>
//           <input
//             value={this.state.input}
//             placeholder="Enter new task"
//             onChange={e => this.handleInputChange(e.target.value)}
//           />

//           <button onClick={this.handleAddTask}>Add</button>
//         </div>

//         <br />

//         {list}
//       </div>
//     );
//   }
// }

// export default App;