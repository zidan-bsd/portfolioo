import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeConfig = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeConfig.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeConfig.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeConfig);
};
