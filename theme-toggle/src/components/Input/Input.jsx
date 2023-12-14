import "./Input.css";

import React, { useContext } from "react";

import { ThemeContext } from "../../App";

function Input({ label, type, placeholder }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <label className={`label-${theme}`} htmlFor={`id-${label}`}>
        {label}
      </label>
      <input
        id={`id-${label}`}
        className={`input input-${theme}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
