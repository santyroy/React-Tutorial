import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];

  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "Ninja" },
    { id: 2, name: "Clark", age: 25, skill: "Laser eyes" },
    { id: 3, name: "Diana", age: 28, skill: "Laso" },
  ];

  // Recommended way is tp create a separate component and pass these as props
  // rather than making the JSX complicated.

  // index should be always the second parameter
  // index is not recommended as key props
  const personList = persons.map((person, index) => (
    // <h2>
    //   I am {person.name}. I am {person.age} years old. I have {person.skill}{" "}
    //   skill.
    // </h2>

    // <Person key={person.name} person={person} />

    <Person key={index} person={person} />
  ));

  return <div>{personList}</div>;
}

export default NameList;
