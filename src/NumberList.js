import React from "react";

export default function numberList(props) {
  return (
    <ul>
      {props.number.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}
