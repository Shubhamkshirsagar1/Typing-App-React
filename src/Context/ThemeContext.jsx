import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Styles/theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const defaultValue =
    JSON.parse(localStorage.getItem("theme")) || themeOptions[2].value;

  const [theme, setTheme] = useState(defaultValue);

  const values = {
    theme,
    setTheme,
    defaultValue,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
