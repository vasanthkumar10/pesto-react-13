import React, { useContext } from "react";

import { NameContext } from "../App";

function ComponentD() {
  const { name } = useContext(NameContext);
  console.log("D", name);
  return (
    <div>
      <h2>Component D - {name}</h2>
    </div>
  );
}

export default ComponentD;
