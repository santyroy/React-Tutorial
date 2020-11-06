import React, { useState, useEffect } from "react";

function HookUseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect method runs after every render() method call.
  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]); // here whenever count value changes then useEffect is run.

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookUseEffectOne;
