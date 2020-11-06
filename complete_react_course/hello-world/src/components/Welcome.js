import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;

    // destructering states is also possible
    // const {state1, state2} = this.state;

    return (
      <div>
        <h1>Class Component</h1>
        <h3>
          {/* Welcome {this.props.name} a.k.a {this.props.heroName} */}
          Welcome {name} a.k.a {heroName}
        </h3>
      </div>
    );
  }
}

export default Welcome;

// In a class components props should be referred with "this" keyword
