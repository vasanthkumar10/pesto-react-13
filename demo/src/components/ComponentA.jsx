import ComponentB from "./ComponentB";
import React from "react";

function ComponentA() {
  // console.log("A ->", props);
  // props are read-only data
  // props.name = "kumar";
  //   Passing props -> to child -child -child -> props drilling

  return (
    <div>
      <h2>Component A </h2>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
