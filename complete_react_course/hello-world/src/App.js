import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalGreeting from "./components/ConditionalGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";

import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";

import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefDemo from "./components/RefsDemo";
import Input from "./components/Input";
import FocusInput from "./components/FocusInput";
import ForwardParentInput from "./components/ForwardParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterRenderProp from "./components/ClickCounterRenderProp";
import HoverCounterRenderProp from "./components/HoverCounterRenderProp";
import UserRenderProp from "./components/UserRenderProp";
import CounterRenderProp from "./components/CounterRenderProp";
import ComponentC from "./contextapi/ComponentC";
import { UserProvider } from "./contextapi/UserContext";
import PostList from "./http/PostList";
import PostForm from "./http/PostForm";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />

      <Hello />

      <Message />

      <Counter />

      <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <ConditionalGreeting /> */}

      {/* <NameList /> */}

      {/* <StyleSheet primary={true} />

      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form /> */}

      {/* <LifecycleA /> */}

      {/* <FragmentDemo /> */}
      {/* <Table /> */}

      {/* <ParentComp /> */}

      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <ForwardParentInput /> */}

      {/* <PortalDemo /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <ClickCounter name="Props is passed to HOC" />
      <HoverCounter /> */}

      {/* <ClickCounterRenderProp /> */}
      {/* <HoverCounterRenderProp /> */}
      {/* <UserRenderProp
        render={(isLoggedIn) => (isLoggedIn ? "Sougata" : "Guest")}
      />
      <CounterRenderProp
        render={(count, incrementCount) => (
          <ClickCounterRenderProp
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />
      <CounterRenderProp
        render={(count, incrementCount) => (
          <HoverCounterRenderProp
            count={count}
            incrementCount={incrementCount}
          />
        )}
      /> */}

      {/* Provider Component is responsible to provide a value to all the descendent components */}
      {/* This value can be consumed by C or any component nested down to C */}
      {/* <UserProvider value="Sougata">
        <ComponentC />
      </UserProvider> */}

      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
