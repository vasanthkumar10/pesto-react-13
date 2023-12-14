import { INITIALSTATE, reducer } from "../utils/constants";
import React, { useReducer } from "react";

export function ReducerDemo1() {
  const [count, dispatch] = useReducer(reducer, INITIALSTATE);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "FACTORIAL", value: 10 })}>
        Factorial
      </button>
    </div>
  );
}
