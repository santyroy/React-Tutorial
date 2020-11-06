import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function ReducerCounterTwoObject() {
  const [count, dispatcher] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Object Counter - {count.firstCounter}</div>
      <div>Object Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatcher({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatcher({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatcher({ type: "increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatcher({ type: "decrement", value: 5 })}>
        Decrement By 5
      </button>
      <div>
        <button onClick={() => dispatcher({ type: "increment2", value: 1 })}>
          Increment Second
        </button>
        <button onClick={() => dispatcher({ type: "decrement2", value: 1 })}>
          Decrement Second
        </button>
      </div>
      <button onClick={() => dispatcher({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerCounterTwoObject;
