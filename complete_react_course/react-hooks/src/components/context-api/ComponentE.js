import React, { useContext } from "react";
import ComponentF from "./ComponentF";

import { UserContext, ChannelContext } from "../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <ComponentF />
      {
        <div>
          <div>Hook Context User - {user}</div>
          <div>Hook Context Channel - {channel}</div>
        </div>
      }
    </div>
  );
}

export default ComponentE;
