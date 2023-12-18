// Hooks/fnal component -> component (fn + HTML)
// Hooks -> JS code -> [state, setState]

import React, { useEffect, useState } from "react";

function CounterHooks({ counterRef }) {
  const [count, setCount] = useState(100); // initialState

  useEffect(() => {
    counterRef.current.innerText = `Counter - ${count}`;
  }, [count, counterRef]);

  const handleIncrement = (step = 1) => {
    setCount((prevCount) => prevCount + step);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button onClick={() => handleIncrement()}>increment</button>
      <button onClick={() => handleIncrement(5)}>increment by 5</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
}

export default CounterHooks;
