// JS + HTMl -> JSX (Javascript XML syntax) -> component

// Inorder to convert my class -> react component -> React Component Class

import React, { Component, createContext } from "react";

import AxiosDemo from "./components/AxiosDemo";
import Border from "./components/Border";
import BorderWrapper from "./components/BorderWrapper";
import ComponentA from "./components/ComponentA";
import ComponentD from "./components/ComponentD";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";
import Parent from "./components/Parent";
import Post from "./components/Post";
import { ReducerDemo } from "./components/ReducerDemo";
import { ReducerDemo1 } from "./components/ReducerDemo1";
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
      // <AgeContext.Provider value={this.state.age}>
      //   <NameContext.Provider
      //     value={{ name: this.state.name, age: this.state.age }}
      //   >
      //     <div>
      //       {/* <h1>Pesto - {this.state.name}</h1> */}
      //       {/* <button onClick={this.modifiedName}>change name</button> */}
      //       {/* <button onClick={this.changeName}>change name</button>
      //   <Welcome name="virat" age="10" />
      //   <Welcome name="rohit" age="20" /> */}
      //       {/* <Counter />
      //   <CounterHooks /> */}
      //       {/* <TaskManager /> */}
      //       {/* <Post /> */}

      //       <ComponentA />
      //       <ComponentD />
      //     </div>
      //   </NameContext.Provider>
      // </AgeContext.Provider>

      <div>
        {/* <BorderWrapper isVisible={true} name="vasi" color="green">
          <Counter />
        </BorderWrapper>

        <BorderWrapper>
          <ComponentA />
          <ComponentD />
        </BorderWrapper>

        <BorderWrapper name="vasi"></BorderWrapper>
        <Border /> */}
        {/* <Parent /> */}
        {/* <ReducerDemo />
        <ReducerDemo1 /> */}
        <AxiosDemo />
      </div>
    );
  }
}

export default App;
