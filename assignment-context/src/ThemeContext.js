import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const themeProvider = ({ children }) => {
    
};
