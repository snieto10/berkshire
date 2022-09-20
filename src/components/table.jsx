import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  render() {
    let totalValue = this.props.stocks.shares * this.props.stocks.price;

    return (
      <table className="table-stocks">
        <thead>
          <tr className="table-top">
            <th>Stock</th>
            <th>Company Name</th>
            <th>Industry</th>
            <th>Shares</th>
            <th>Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {this.props.stocks.map((stock) => (
            <tr key={stock.sticker}>
              <td>{stock.sticker}</td>
              <td>{stock.companyName}</td>
              <td>{stock.industry}</td>
              <td>{stock.shares}</td>
              <td>{stock.price}</td>
              <td>{`$${stock.shares * stock.price}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
