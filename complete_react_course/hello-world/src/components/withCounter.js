import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    // Common functional which needs to be re-used accross different components
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          //   name="Sougata"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;

// Higher Order Component (HOC)
// It makes a common space for codes to be re-used
// takes in originalComponent as paramter and returns modifiedComponent.
