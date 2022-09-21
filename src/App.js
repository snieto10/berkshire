import React, { Component } from "react";
import "./App.css";
import { getStocks } from "./components/services/stocksList";
import Title from "./components/title";
import Summary from "./components/summary";
import BuySell from "./components/buySell";
import Menu from "./components/menu";

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
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.stocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.sticker}</td>
                  <td>{stock.companyName}</td>
                  <td>{stock.shares}</td>
                  <td>{stock.price}</td>
                  <td>{stock.shares * stock.price}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(stock)}
                      className="btn btn-danger btn-small"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
