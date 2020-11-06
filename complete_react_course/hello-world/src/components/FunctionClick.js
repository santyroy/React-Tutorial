import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button clicked.");
  }

  // <button onClick={clickHandler}>Click</button> -> here {handleClick} is a passing a function
  // <button onClick={() => this.clickHandler()}>Click</button> -> here {handleClick()} is a calling a function

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
