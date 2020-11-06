import React, { Component } from "react";

class UserRenderProp extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default UserRenderProp;
