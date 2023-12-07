import React, { Component, Fragment } from "react";
// stateful component

export class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 10,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return {};
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  handleIncrement = () => {
    // update the data and importantly render the UI again (re-rendering)
    // It is an asynchronous process
    this.setState({ count: this.state.count + 1 });
    console.log("clicking increment", this.state.count);
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    console.log("clicking decrement", this.state.count);
  };

  render() {
    console.log("Rendering the UI");
    return (
      <Fragment>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </Fragment>
    );
  }
}

export default Counter;
