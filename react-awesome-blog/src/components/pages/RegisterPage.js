import api from "../../api";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { ...state, loading: true };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        registerUser: action.payload,
      };
    case "REGISTER_FAIL":
      return { ...state, loading: false, error: action.type };
    default:
      return state;
  }
};

export default function RegisterPage() {
  const { user, setUser } = useContext(ThemeContext);

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: "",
    registerUser: null,
  });
  const { error, loading, registerUser } = state;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_REQUEST" });
    try {
      const { data } = await api.post("/api/users", {
        name,
        email,
        password,
        id: Math.floor(Math.random() * 1000000),
      });
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "REGISTER_FAIL", payload: err.meessage });
    }
  };

  useEffect(() => {
    if (registerUser) {
      setUser(registerUser);
      return Navigate("/");
    }
  }, [registerUser]);

  return (
    <div>
      <h1>Register User</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label></label>
          <button>Register</button>
        </div>
        {loading && (
          <div className="form-item">
            <label></label>
            <span>Processing...</span>
          </div>
        )}
        {error && (
          <div className="form-item">
            <label></label>
            <span className="error">{error}</span>
          </div>
        )}
        <div className="form-item">
          <label></label>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
