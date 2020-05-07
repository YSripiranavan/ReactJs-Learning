import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = () => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        { name: "Sri", age: 28 },
        { name: "Piranavan", age: 27 },
        { name: "Indirani", age: 65 }
      ]
    }
  );

  const [otherState, setOtherState] = useState({
    otherValue: "Some Other Value"
  });
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "SriPiranavan", age: 28 },
        { name: "Piranavan", age: 27 },
        { name: "Indirani", age: 65 }
      ]
    })
  }
  return (
    <div className="App">
      <h1> Hi!there i am react app </h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        My Hobbies : Learn New Programming
        </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
