import React from "react";
import "./myStyle.css";

const heading = {
  fontSize: "36px",
  color: "blue",
};

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Style Sheet</h1>
      <h2 style={heading}>Inline</h2>
    </div>
  );
}

export default StyleSheet;
