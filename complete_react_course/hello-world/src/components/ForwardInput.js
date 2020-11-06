import React from "react";

// function ForwardInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const ForwardInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardInput;
