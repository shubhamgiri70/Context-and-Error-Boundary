// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

