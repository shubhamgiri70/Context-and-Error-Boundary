// components/Dashboard.js
import React from "react";
import { useTheme } from "../ThemeContext";
import Widget from "./Widget";

function Dashboard() {
  const { theme } = useTheme();

  return (
    <div className={`dashboard ${theme}`}>
      <h2>Dashboard</h2>
      <Widget />
    </div>
  );
}

export default Dashboard;
