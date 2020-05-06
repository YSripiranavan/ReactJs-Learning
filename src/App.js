import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi!there i am react app </h1>
        <Person name="Sri" age="28" />
        <Person name="Piranavan" age="27">
          My Hobbies : Learn New Programming
        </Person>
        <Person name="Indirani" age="65" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement(
    //     "h1",
    //     null,
    //     "hi there from react createelement method"
    //   )
    // );
  }
}

export default App;
