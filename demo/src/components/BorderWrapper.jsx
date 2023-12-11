import React from "react";

function BorderWrapper({ isVisible = false, name, children, color = "red" }) {
  // console.log("props", children);

  return (
    <div
      style={{
        border: `5px solid ${color}`,
        margin: "10px",
        padding: "10px",
      }}
    >
      {isVisible && <h1>border component - {name}</h1>}
      {children}
    </div>
  );
}

export default BorderWrapper;
