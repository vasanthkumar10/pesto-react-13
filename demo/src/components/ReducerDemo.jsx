// import { INITIALSTATE, reducer } from "../utils/constants";
import React, { useReducer } from "react";

import { useCount } from "../hooks/useCount";

export function ReducerDemo() {
  // const [count, dispatch] = useReducer(reducer, INITIALSTATE);
  const [count, increment, decrement, reset] = useCount(0);

  return (
    <div>
      {/* <h1>Count - {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "FACTORIAL", value: 10 })}>
        Factorial
      </button> */}

      <h1> count = {count}</h1>
      <button onClick={() => increment(5)}>increment</button>
      <button onClick={() => decrement(10)}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
