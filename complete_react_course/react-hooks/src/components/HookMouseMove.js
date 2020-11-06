import React, { useState, useEffect } from "react";

function HookMouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  // useEffect can return a function, this function is called when component unmounts
  // this function acts as a componentWillUnmount() function / cleanup

  useEffect(() => {
    console.log("useEffect called...");
    window.addEventListener("mousemove", logMousePosition);

    // below returned function is the cleanup code called during component unmount
    return () => {
      console.log("component unmount code...");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouseMove;
