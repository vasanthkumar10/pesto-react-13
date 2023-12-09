// JS + HTMl -> JSX (Javascript XML syntax) -> component

// Inorder to convert my class -> react component -> React Component Class

import React, { Component, createContext } from "react";

import ComponentA from "./components/ComponentA";
import ComponentD from "./components/ComponentD";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";
import Post from "./components/Post";
import TaskManager from "./components/TaskManager";
import Welcome from "./components/Welcome";

// With state -> stateful component

export const NameContext = createContext();
export const AgeContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vasanth",
      age: 10,
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
      <AgeContext.Provider value={this.state.age}>
        <NameContext.Provider
          value={{ name: this.state.name, age: this.state.age }}
        >
          <div>
            {/* <h1>Pesto - {this.state.name}</h1> */}
            {/* <button onClick={this.modifiedName}>change name</button> */}
            {/* <button onClick={this.changeName}>change name</button>
        <Welcome name="virat" age="10" />
        <Welcome name="rohit" age="20" /> */}
            {/* <Counter />
        <CounterHooks /> */}
            {/* <TaskManager /> */}
            {/* <Post /> */}

            <ComponentA />
            <ComponentD />
          </div>
        </NameContext.Provider>
      </AgeContext.Provider>
    );
  }
}

export default App;
