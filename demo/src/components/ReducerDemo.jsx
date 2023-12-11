import React, { useState } from "react";

// reducer fn

export function ReducerDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button>increment</button>
      <button>decrement</button>
    </div>
  );
}
