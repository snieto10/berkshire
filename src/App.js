import React, { Component } from "react";
import "./App.css";
import { getStocks } from "./components/services/stocksList";
import Title from "./components/title";
import Summary from "./components/summary";
import BuySell from "./components/buySell";
import Menu from "./components/menu";
import Table from "./components/table";
import "./components/table.css";

class App extends Component {
  state = {
    stocks: getStocks(),
  };

  handleDelete = (stock) => {
    let stocks = this.state.stocks.filter((s) => s.id !== stock.id);
    this.setState({ stocks });
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Summary stocks={this.state.stocks} />
        <BuySell />
        <div className="main">
          <Menu />
          <Table stocks={this.state.stocks} onDelete={this.handleDelete} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
