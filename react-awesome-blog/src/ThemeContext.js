import { createContext, useState } from "react";

const ThemeContext = createContext();
const lsUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const lsTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";
function ThemeContextProvider(props) {
  const [user, setUser] = useState(lsUser);
  const [theme, setTheme] = useState(lsTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, user, setUser }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider };
