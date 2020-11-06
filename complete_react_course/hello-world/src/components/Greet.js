import React from "react";

// function Greet() {
//   return <h1>Hello Sougata</h1>;
// }

const Greet = (props) => {
  // const Greet = ({name, heroName}) => {
  console.log(props);
  const { name, heroName } = props; // destructering
  // Props are immutable
  // props.name = "Joker";
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

// If we use "default export Greet" then while importing in parent components we can use any name like
// import MyComponent from './components/Greet';

// if we use named export like
// export const Greet = () => {}
// OR
// export function Greet() {}
// then we need to use the same name of the component
// import Greet from './components/Greet';
