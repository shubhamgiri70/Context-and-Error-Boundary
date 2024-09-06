import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Dashboard theme={theme} />
      </div>
    </>
  );
}

export default App;
