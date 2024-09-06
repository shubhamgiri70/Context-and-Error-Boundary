import React from "react";

function Navbar(props) {
  return (
    <nav className={`navbar ${props.theme}`}>
      <h1>App Navbar</h1>
      <button onClick={props.toggleTheme}>
        Switch to {props.theme === "light" ? "dark" : "light"} Mode
      </button>
    </nav>
  );
}

export default Navbar;
