import React, { Component } from "react";
import "./App.css";
import { stocksInfo } from "./components/services/stocksList";
import Title from "./components/title";
import Summary from "./components/summary";
import Table from "./components/table";
import BuySell from "./components/buySell";
import Menu from "./components/menu";

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
        <BuySell />

        <div className="main">
          <Menu />
          <Table stocks={this.state.stocks} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
