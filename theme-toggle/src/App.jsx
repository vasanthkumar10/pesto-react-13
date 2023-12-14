import "./App.css";

import { createContext, useEffect, useState } from "react";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

export const ThemeContext = createContext();

const currentTheme = localStorage.getItem("theme");
const initialTheme = currentTheme ? currentTheme : "light";

function App() {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`App app-${theme}`}>
        <h1 className={`header header-${theme}`}>App - {theme}</h1>
        <Input
          type={"text"}
          placeholder={"John doe"}
          label={"Enter the name: "}
        />
        <Button text={"toggle theme"} action={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
