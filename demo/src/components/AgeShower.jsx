import React, { memo } from "react";

import BorderWrapper from "./BorderWrapper";

function AgeShower({ name, age }) {
  console.log("Age shower", name, age);
  return (
    <BorderWrapper>
      <h2>Name - {name}</h2>
      <h3> Age - {age}</h3>
    </BorderWrapper>
  );
}

export default memo(AgeShower); // memoized component -> pure component
// this comp re-renders only if props / state changes
