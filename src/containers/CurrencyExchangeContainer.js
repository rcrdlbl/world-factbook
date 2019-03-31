import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurrencyExchange } from '../redux/actions/visitActions'
import CurrencyExchangeForm from '../components/CurrencyExchangeForm'
import ExchangeView from '../components/ExchangeView'

class CurrencyExchangeContainer extends Component {

  state = {
    userCurrencyName: ''
  }

  onCurrencyFormSubmit = (suggestion) => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${suggestion}`).then(response => response.json())
    .then(data => {
      this.setState({
        userCurrencyName: data.currencies[0].name
      })
      this.props.createCurrencyExchange({selected_currency: this.props.currency[0].code, user_currency: data.currencies[0].code})
    })
  }

  render() {
    return (
      <div>
        <h2>1</h2>
        <p>{this.props.currency[0].name}</p>
        <p>equals</p>
        <ExchangeView userCurrencyName={this.state.userCurrencyName} exchange={this.props.exchange} />
        <CurrencyExchangeForm onCurrencyFormSubmit={this.onCurrencyFormSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    exchange: state.visits.exchange,
    exchanges: state.visits.exchanges
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCurrencyExchange: (currencies) => dispatch(createCurrencyExchange(currencies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchangeContainer)
