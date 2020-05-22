import React, { Component } from "react";

class Prices extends Component {
  state = {
    currency: "USD",
  };
  render() {
    let list = "";

    if (this.state.currency == "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.USD.description} :{" "}
              <span clas="badge badge-primary">{this.props.bpi.USD.code}</span>
              <br/>
          <strong>
            {this.props.bpi.USD.symbol} <br />
            {this.props.bpi.USD.rate}
          </strong>
        </li>
      );
    } else if (this.state.currency == "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.GBP.description} :{" "}
              <span clas="badge badge-primary">{this.props.bpi.GBP.code}</span>
              <br/>
          <strong>
            {this.props.bpi.GBP.symbol} <br />
            {this.props.bpi.GBP.rate}
          </strong>
        </li>
      );
    } else if (this.state.currency == "EUR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.EUR.description} :{" "}
              <span clas="badge badge-primary">{this.props.bpi.EUR.code}</span>
              <br/>
          <strong>
            {this.props.bpi.EUR.symbol}
            <br />
            {this.props.bpi.EUR.rate}
          </strong>
        </li>
      );
    }
    return (
      <div>
        <ul className="list-group"></ul>
        {list}
        <br />
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
