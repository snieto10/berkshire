import React, { Component } from "react";
import "./App.css";
import Title from "./components/title";
import Summary from "./components/summary";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Title />
        <Summary />
      </React.Fragment>
    );
  }
}

export default App;
