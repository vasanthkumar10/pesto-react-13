import React, { useContext } from "react";

import { NameContext } from "../App";

function ComponentC() {
  const data = useContext(NameContext);

  return (
    <div>
      <h2>ComponentC - {data.name} </h2>
    </div>
  );
}

export default ComponentC;
