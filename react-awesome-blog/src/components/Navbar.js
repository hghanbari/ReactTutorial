import React from "react";

export default function Navbar() {
  return (
    <div className="header">
      <div className="header-item">
        <a href="/">
          <strong>Awesome Blog</strong>
        </a>
      </div>
      <div className="header-item">
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
