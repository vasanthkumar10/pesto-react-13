import React, { useContext } from "react";

import { ThemeContext } from "../../App";

function Button({ text, action }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={action}>{text}</button>
    </div>
  );
}

export default Button;
