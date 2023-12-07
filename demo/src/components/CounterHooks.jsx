// Hooks/fnal component -> component (fn + HTML)
// Hooks -> JS code -> [state, setState]

import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(100); // initialState
  const [age, setAge] = useState(1);

  const handleIncrement = (step = 1) => {
    // update the data and importantly render the UI again (re-rendering)
    // It is an asynchronous process
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
    console.log("increment hooks", count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      {/* {count % 2 !== 0 && <h1>Counter hooks - {count}</h1>} */}
      {count % 2 !== 0 ? (
        <h1>Counter hooks - {count}</h1>
      ) : (
        <h2>Even number. You can't see me</h2>
      )}
      <button onClick={() => handleIncrement()}>increment</button>
      <button onClick={() => handleIncrement(5)}>increment by 5</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
}

export default CounterHooks;
