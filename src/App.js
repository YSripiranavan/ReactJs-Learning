import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! there i am react app</h1>
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
