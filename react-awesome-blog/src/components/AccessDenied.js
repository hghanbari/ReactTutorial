import React from "react";
import { Link } from "react-router-dom";

export default function AccessDenied() {
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
