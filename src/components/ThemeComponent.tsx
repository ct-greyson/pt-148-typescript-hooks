import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  );
};

export default ThemeComponent;
