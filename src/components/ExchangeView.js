import React, { Component } from 'react'

class ExchangeView extends Component {

  render() {
    return (
      <div>
        {!this.props.exchange && <h2>~</h2>}
        {this.props.exchange && <h2>{this.props.exchange.result}</h2>}
        {!this.props.userCurrencyName && <p>~~~</p>}
        {this.props.userCurrencyName && <p>{this.props.userCurrencyName}</p>}
      </div>
    )
  }
}

export default ExchangeView
