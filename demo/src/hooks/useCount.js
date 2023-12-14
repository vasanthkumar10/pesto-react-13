import { useState } from "react";

export function useCount(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = (value) => {
    setCount((prev) => prev + value);
  };

  const decrement = (value) => {
    setCount((prev) => prev - value);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];
}
