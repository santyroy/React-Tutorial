import React, { Component } from "react";

class ClickCounterRenderProp extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div className="ClickCounnterRenderProp">
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounterRenderProp;
