import React from "react";
import AbuotPage from "./pages/AbuotPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

export default function Routing() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page_header">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>{" "}
          <NavLink to="/product" activeClassName="active">
            Producte
          </NavLink>{" "}
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="page_content">
          <Routes>
            <Route path="/about" element={<AbuotPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
