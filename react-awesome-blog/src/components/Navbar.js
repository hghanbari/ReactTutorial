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

  const { theme, toggleTheme, user } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "" : "active")}>
          Awesome Blog
        </NavLink>
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
        {user ? (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "" : "active")}>
              {user.name}
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "" : "active")}>
              Create Poat
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "" : "active")}>
            Login
          </NavLink>
        )}

        <button onClick={toggleTheme}>
          {theme === "light" ? "Theme: light" : "Theme: dark"}
        </button>
      </div>
    </div>
  );
}
