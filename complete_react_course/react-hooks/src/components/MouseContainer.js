import React, { useState } from "react";
import HookMouseMove from "./HookMouseMove";

function MouseContainer() {
  const [display, setDiaplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDiaplay(!display)}>Toggle Display</button>
      {display && <HookMouseMove />}
    </div>
  );
}

export default MouseContainer;
