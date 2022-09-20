import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  state = {};
  render() {
    return (
      <table className="table-stocks">
        <tr>
          <th>Stock</th>
          <th>Company Name</th>
          <th>Industry</th>
          <th>Shares</th>
          <th>Price</th>
          <th>Total Value</th>
        </tr>
        <tr></tr>
      </table>
    );
  }
}

export default Table;
