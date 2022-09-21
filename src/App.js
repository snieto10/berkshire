import React, { Component } from "react";
import "./App.css";
import { stocksInfo } from "./components/services/stocksList";
import Title from "./components/title";
import Summary from "./components/summary";
import Table from "./components/table";

class App extends Component {
  state = {
    stocks: stocksInfo,
    cash: 50000000000,
  };
  render() {
    return (
      <React.Fragment>
        <Title />
        <Summary stocks={this.state.stocks} />
        <Table stocks={this.state.stocks} />
      </React.Fragment>
    );
  }
}

export default App;
