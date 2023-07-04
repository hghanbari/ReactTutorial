import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, user, setUser }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider };
