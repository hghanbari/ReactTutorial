import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Producte Page</h1>
      {id ? (
        <div>
          Product ID: {id}
          <button onClick={handleClick}>Navigate to Home Page</button>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="/product/1">Producte 1</Link>
          </li>
          <li>
            <Link to="/product/2">Producte 2</Link>
          </li>
          <li>
            <Link to="/product/3">Producte 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
