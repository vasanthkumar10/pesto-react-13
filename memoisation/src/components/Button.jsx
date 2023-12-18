import React from "react";

function Button({ nameRef }) {
  console.log("ref", nameRef);
  return <button onClick={() => nameRef.current.focus()}>click</button>;
}

export default Button;
