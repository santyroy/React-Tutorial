import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      // Inside the UserConsumer we need to create a function to access the value passed form UserProvider
      // Here username hold the value 'Sougata'
      // Once the value is picked up we can return a JSX as required.
      <UserConsumer>
        {(username) => {
          return <h1>Hello {username}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
