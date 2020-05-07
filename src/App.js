import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sri", age: 28 },
      { name: "Piranavan", age: 27 },
      { name: "Indirani", age: 65 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "SriPiranavan", age: 28 },
        { name: "Piranavan", age: 27 },
        { name: "Indirani", age: 65 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Hi!there i am react app </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies : Learn New Programming
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
