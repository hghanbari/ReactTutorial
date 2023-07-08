import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

export default function ProfilePage() {
  const { user } = useContext(ThemeContext);
  if (!user) {
    return (
      <div>
        <h3>Access Denied!</h3>
        <p>You need to log in first in order to see this page</p>
        <p>
          <Link to="/login">Go to login page</Link>
        </p>
      </div>
    );
  }

  return <div>profile {user.name}</div>;
}
