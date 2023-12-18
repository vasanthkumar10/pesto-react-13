import React, { useRef } from "react";

import Button from "./Button";

function FocusInput() {
  const nameRef = useRef(null);

  return (
    <div>
      <div>
        <label htmlFor="name">name: </label>
        <input ref={nameRef} type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input type="text" name="age" id="age" />
      </div>
      <Button nameRef={nameRef} />
    </div>
  );
}

export default FocusInput;

// 1 way binding -> parent can control the rendering process of child but reverse is not possible

// If you want to access parent element from child -> create a ref and pass that ref as a prop
