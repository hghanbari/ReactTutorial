import React, { useState } from "react";

export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [previousClick, setPreviousClick] = useState(0);
  const inputChange = (event) => {
    setPreviousClick(Number(event.target.value));
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <label>
        Previous click:
        <input type="text" value={previousClick} onChange={inputChange} />
      </label>
      <p>You clicked {previousClick + count} times</p>
      <button onClick={increase}>Click me </button>
    </div>
  );
}
