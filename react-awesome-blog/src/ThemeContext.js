import { createContext, useState } from "react";

const ThemeContext = createContext();
const lsUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
function ThemeContextProvider(props) {
  const [user, setUser] = useState(lsUser);
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
