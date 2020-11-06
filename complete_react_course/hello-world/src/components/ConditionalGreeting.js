import React, { Component } from "react";

class ConditionalGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Sougata</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h2>Welcome Guest</h2>
    //     </div>
    //   );
    // }

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>Welcome Sougata</h1>;
    // } else {
    //   message = <h1>Welcome Guest</h1>;
    // }

    // return <div>{message}</div>;

    // return this.state.isLoggedIn ? (
    //   <div>
    //     <h1>Welcome Sougata</h1>
    //   </div>
    // ) : (
    //   <div>
    //     <h1>Welcome Guest</h1>
    //   </div>
    // );

    return (
      this.state.isLoggedIn && (
        <div>
          <h1>Welcome Sougata</h1>
        </div>
      )
    );
  }
}

export default ConditionalGreeting;

// Conditional Rendering approaches.
// 1. If Else
// 2. Element variables
// 3. ternary condition
// 4. short circuit
