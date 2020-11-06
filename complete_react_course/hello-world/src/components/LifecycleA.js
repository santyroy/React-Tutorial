import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Sougata" };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({ name: "Roy" });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

// During MOUNTING phase
// 1. contructor() is called.
// 2. getDerivedStateFromProps() is called.
// 3. render() method is called. followed by any child component.
// 4. componentDidMount() is called

// During UPDATING phase
// 1. getDerivedStateFromProps() is called.
// 2. shouldComponentUpdate is called.
// 3. render() method is called. followed by any child component.
// 4. getSnapshotBeforeUpdate() of child is called, followed by getSnapshotBeforeUpdate() of parent.
// 5. componentDidUpdate() is called

// During UNMOUNT phase
// 1. componentWillUnmount() is called.

// During ERROR handling phase
// 1. getDerivedStateFromError(error) is called.
// 2. componentDidCatch(error, info) is called.
