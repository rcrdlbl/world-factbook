import React, { Component } from 'react'

class PreviousExchange extends Component {

  render() {
    return(
      <div>1 {this.props.exchange.selected_currency} = {this.props.exchange.result} {this.props.exchange.user_currency}</div>
    )
  }
}

export default PreviousExchange
