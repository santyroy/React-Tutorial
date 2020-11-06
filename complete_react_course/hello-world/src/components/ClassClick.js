import React, { Component } from "react";

class ClassClick extends Component {
  handleClick() {
    console.log("Button Clicked inside Class Click.");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    );
  }
}

export default ClassClick;
