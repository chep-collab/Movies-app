import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider to wrap the app and provide theme-related state
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier usage of ThemeContext
export const useTheme = () => useContext(ThemeContext);
