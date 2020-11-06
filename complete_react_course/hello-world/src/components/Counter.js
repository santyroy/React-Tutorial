import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("Callback value: ", this.state.count);
    // });

    // This would give the state value 1 less than actual rendered value.
    // Because setState() method is an async method. So console.log() gets executed first.
    // If you want console.log to happen right after setState() method then we need to pass
    // the second parameter to the setState method.
    // 1st Param - the state
    // 2nd Param - the call back method () => {console.log()}

    // ALL WAYS PASS A FUNCTION TO THE setState() method to avoid setState optimization done by react
    // If we pass as a function then we can get the previous state value before making any changes to it.
    // Params of the arrorw function for setState()
    // 1st Param - prevState
    // 2nd Param - props object
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));

    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
