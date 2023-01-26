import React from "react";
import "./Button.css";

const Button = ({ clickHandler, name, purple, wide }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    "component-button",
    purple ? "purple" : "",
    wide ? "wide" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={() => handleClick()}>{name}</button>
    </div>
  );
};

export default Button;
