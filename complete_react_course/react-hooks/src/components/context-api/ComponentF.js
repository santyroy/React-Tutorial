import React from "react";

import { UserContext, ChannelContext } from "../../App";

function ComponentF() {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <ChannelContext.Consumer>
            {(channel) => {
              return (
                <div>
                  Component F - {user} using channel - {channel}
                </div>
              );
            }}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

export default ComponentF;
