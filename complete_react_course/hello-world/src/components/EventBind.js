import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = { message: "Hello" };

    // this.changeMessage = this.changeMessage.bind(this);
  }

  //   changeMessage() {
  //     this.setState((prevState) => ({
  //       message: "Goodbye",
  //     }));

  //     console.log(this);
  //   }

  changeMessage = () => {
    this.setState({ message: "Goodbye" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.changeMessage()}>Click</button> */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}

// Binding approaches
// 1. binding inside the render() -> <button onClick={this.changeMessage.bind(this)}>Click</button> (NR)
// 2. using arrow functions inside render() -> <button onClick={() => this.changeMessage()}>Click</button> (NR)
// 3. binding the event handler inside constructor -> (R)
// 4. use arrow function when defining the function in the class -> (R)

export default EventBind;
