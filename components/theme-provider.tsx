"use client";

import {createContext,useContext} from "react";



type Theme = {
  colors: {
    primary: string;
    secondary: string;
  }
}

const defaultTheme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1c1c1c",
  }
}


const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);