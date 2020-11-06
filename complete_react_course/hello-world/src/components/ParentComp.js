import React, { Component } from "react";
import ParentComponent from "./ParentComponent";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor() {
    super();
    this.state = { name: "Sougata" };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Sougata" });
    }, 2000);
  }

  render() {
    console.log("******************** Parent Comp render *******************");
    return (
      <div>
        <h1>Parent Component</h1>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
