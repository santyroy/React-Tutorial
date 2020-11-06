import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassIntervalCounter from "./components/ClassIntervalCounter";
import ClassMouseMove from "./components/ClassMouseMove";
import ComponentC from "./components/context-api/ComponentC";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterArrays";
import HookCounterThree from "./components/HookCounterObject";
import HookCounterTwo from "./components/HookCounterTwo";
import HookIntervalCounter from "./components/HookIntervalCounter";
import HookMouseMove from "./components/HookMouseMove";
import HookUseEffectOne from "./components/HookUseEffectOne";
import MouseContainer from "./components/MouseContainer";
import ParentComponent from "./components/ParentComponent";
import UseMemoCounter from "./components/UseMemoCounter";
import ComponentA from "./components/useReducer/ComponentA";
import ComponentB from "./components/useReducer/ComponentB";
import ComponentD from "./components/useReducer/ComponentD";
import DataFetchingOne from "./components/useReducer/DataFetchingOne";
import ReducerCounterOne from "./components/useReducer/ReducerCounterOne";
import ReducerCounterTwoObject from "./components/useReducer/ReducerCounterTwoObject";
import ReducerDataFetchingOne from "./components/useReducer/ReducerDataFetchingOne";
import ReducerMultipleCounterThree from "./components/useReducer/ReducerMultipleCounterThree";
import ClassTimer from "./components/ClassTimer";
import UseRefFocusInput from "./components/UseRefFocusInput";
import UseRefTimer from "./components/UseRefTimer";
import DocTitleOne from "./components/customHooks/DocTitleOne";
import DocTitleTwo from "./components/customHooks/DocTitleTwo";
import CustomCounterOne from "./components/customHooks/CustomCounterOne";
import CustomCounterTwo from "./components/customHooks/CustomCounterTwo";
import UserForm from "./components/customHooks/UserForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* USE STATE HOOKS EXAMPLE */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* USE EFFECT HOOK EXAMPLE */}
      {/* <HookUseEffectOne /> */}
      {/* <ClassMouseMove /> */}
      {/* <HookMouseMove /> */}
      {/* <MouseContainer /> */}
      {/* <ClassIntervalCounter /> */}
      {/* <HookIntervalCounter /> */}
      {/* <DataFetching /> */}

      {/* USE CONTEXT HOOK EXAMPLE */}
      {/* <UserContext.Provider value="Sougata">
        <ChannelContext.Provider value="Youtube">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* USE REDUCER HOOK EXAMPLE */}
      {/* <ReducerCounterOne /> */}
      {/* <ReducerCounterTwoObject /> */}
      {/* <ReducerMultipleCounterThree /> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>Count - {count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      {/* <ReducerDataFetchingOne /> */}

      {/* --------------------- FOR PERFORMANCE OPTIMIZATION --------------------- */}

      {/* USE CALLBACK HOOK */}
      {/* useCallback: Caches the provided function instance */}
      {/* <ParentComponent /> */}

      {/* USE MEMO HOOK */}
      {/* useMemo: Invokes the provided function & caches the result */}
      {/* <UseMemoCounter /> */}

      {/* USE REF HOOK */}
      {/* <UseRefFocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <UseRefTimer /> */}

      {/* CUSTOM HOOK */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}

      {/* <CustomCounterOne /> */}
      {/* <CustomCounterTwo /> */}

      <UserForm />
    </div>
  );
}

export default App;
