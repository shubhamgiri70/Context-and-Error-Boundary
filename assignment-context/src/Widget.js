// components/Widget.js
import React from "react";
import { useTheme } from "../ThemeContext";

function Widget() {
  const { theme } = useTheme();

  return (
    <div className={`widget ${theme}`}>
      <p>This is a widget component.</p>
    </div>
  );
}

export default Widget;
