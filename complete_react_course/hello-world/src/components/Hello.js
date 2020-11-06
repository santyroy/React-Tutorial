import React from "react";

const Hello = () => {
  // ------------ JSX version --------------
  //   return (
  //     <div id="hello" className="dummyClass">
  //       <h1>Hello Me</h1>
  //     </div>
  //   );
  // ----------------------------------------

  // -------- Without JSX version -----------
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Me")
  );
  // ----------------------------------------
};

export default Hello;
