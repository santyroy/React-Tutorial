import React from "react";

function Columns() {
  const colors = ["red", "yellow", "green", "blue", "magenta", "cyan"];

  return (
    <React.Fragment>
      {colors.map((color, index) => (
        <React.Fragment key={index}>
          <td>{color}</td>
        </React.Fragment>
      ))}

      <td>Name</td>
      <td>Sougata</td>
    </React.Fragment>
  );
}

export default Columns;
