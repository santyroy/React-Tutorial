import React from "react";

function MemoComp({ name }) {
  console.log("Rendering memo component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);

// React.memo() for a function is similar to PureComponent to class
