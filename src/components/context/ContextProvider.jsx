"use client";
import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  // Fetch dark mode preference from localStorage on the client side
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Context.Provider
      value={{
        progress,
        setProgress,
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
