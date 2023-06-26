import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

export default function MainContext() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`content ${context.theme}`}>
          <h1>Welcom to my app</h1>
          <p>Use context API to share data between componens.</p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
