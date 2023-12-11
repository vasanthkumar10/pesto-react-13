import React, { memo } from "react";

function Button({ text, action }) {
  console.log("Button", text);
  return (
    <div>
      <button onClick={action}>{text}</button>
    </div>
  );
}

export default memo(Button);
