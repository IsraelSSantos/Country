import React, { useState, useEffect } from "react";
import DarkModeFlag from "../DarkModeFlag/DarkModeFlag";
import {} from "./handlebar.scss";

export default function HandleBar(props) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="handlebar">
      <div className="title">
        <h1>Where in the World?</h1>
      </div>
      <div className="dark-mode-container">
        <button
          onClick={() => {
            if (darkMode) {
              setDarkMode(false);
              props.setMode("ligth");
            } else {
              setDarkMode(true);
              props.setMode("dark");
            }
          }}
        >
          <DarkModeFlag isDark={darkMode} />
        </button>
      </div>
    </div>
  );
}
