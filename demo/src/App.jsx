// JS + HTMl -> JSX (Javascript XML syntax) -> component

// Inorder to convert my class -> react component -> React Component Class

import React, { Component } from "react";

import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";
import Welcome from "./components/Welcome";

// With state -> stateful component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vasanth",
    };
    // this.modifiedName = this.changeName.bind(this);
  }

  changeName = () => {
    console.log(this);
    // this.state.name = "Virat";
    // console.log("name changed", this.state);
  };

  render() {
    return (
      <div>
        {/* <h1>Pesto - {this.state.name}</h1> */}
        {/* <button onClick={this.modifiedName}>change name</button> */}
        {/* <button onClick={this.changeName}>change name</button>
        <Welcome name="virat" age="10" />
        <Welcome name="rohit" age="20" /> */}
        <Counter />
        <CounterHooks />
      </div>
    );
  }
}

export default App;
