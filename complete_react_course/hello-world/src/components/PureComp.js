import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp render");
    return (
      <div>
        <h1>Pure Component {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComp;

// Pure Components only re-renders components when their is a shallow comparision change
// between props or state.
