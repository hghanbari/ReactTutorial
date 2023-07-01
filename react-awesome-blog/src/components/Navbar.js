import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/serch/${query}`);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header-item">
        <Link to="/">
          <strong>Awesome Blog</strong>
        </Link>
      </div>
      <div className="header-item">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setQuery(e.target.value)}
            name="query"
            type="text"
            placeholder="serch posts"
          />
          <button>Go</button>
        </form>
      </div>
      <div className="header-item">
        <NavLink to="/login" className="active">
          Login
        </NavLink>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Theme: light" : "Theme: dark"}
        </button>
      </div>
    </div>
  );
}
