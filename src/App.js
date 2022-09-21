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

  handleBuy = () => {
    let stocks = this.state.stocks;
    let number = this.state.stocks.length + 10;
    stocks.push({
      id: number,
      sticker: "FB",
      companyName: "Facebook",
      industry: "Technology",
      shares: 72357455,
      price: 120,
      directors: { ceo: "Tim Cooks", cfo: "John Snow" },
    });
    this.setState({ stocks });
  };

  handleSell = () => {
    let stocks = this.state.stocks;
    stocks.pop();
    this.setState({ stocks });
  };

  handleLike = (stock) => {
    let stocks = [...this.state.stocks];
    let index = stocks.indexOf(stock);
    stocks[index] = { ...stocks[index] };
    stocks[index].liked = !stocks[index].liked;
    this.setState({ stocks });
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Summary stocks={this.state.stocks} />
        <BuySell
          stocks={this.state.stocks}
          onBuy={this.handleBuy}
          onSell={this.handleSell}
        />
        <div className="main">
          <Menu />
          <Table
            stocks={this.state.stocks}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
