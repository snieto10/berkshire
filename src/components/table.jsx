import React, { Component } from "react";
import Like from "./common/like";
import "./table.css";

class Table extends Component {
  render() {
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.sticker}</td>
              <td>{stock.companyName}</td>
              <td>{stock.industry}</td>
              <td>{stock.shares}</td>
              <td>{stock.price}</td>
              <td>{`$${stock.shares * stock.price}`}</td>
              <td>
                <Like
                  onLike={this.props.onLike}
                  solution1={stock}
                  solution2={stock.liked}
                />
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(stock)}
                  className="btn-sell-all"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
