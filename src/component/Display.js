import React from "react";
import "./Display.css";

const Display = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
};

export default Display;
