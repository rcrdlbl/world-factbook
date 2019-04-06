import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurrencyExchange, fetchExchanges } from '../redux/actions/visitActions'
import CurrencyExchangeForm from '../components/CurrencyExchangeForm'
import ExchangeView from '../components/ExchangeView'
import PreviousExchange from '../components/PreviousExchange'

class CurrencyExchangeContainer extends Component {

  state = {
    userCurrencyName: ''
  }

  componentDidMount() {
    this.props.fetchExchanges(this.props.currency[0].code)
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

  renderPreviousExchanges() {
    if (!this.props.exchanges) {
      return <p>No Previous Exchanges</p>
    } else {
      return this.props.exchanges.map(exchange => <PreviousExchange key={exchange.id} exchange={exchange} />)
    }
  }

  render() {
    return (
      <div className="currencyGrid">
        <div>
          <h2>1</h2>
          <p>{this.props.currency[0].name}</p>
        </div>
        <div>
          <ExchangeView userCurrencyName={this.state.userCurrencyName} exchange={this.props.exchange} />
          <CurrencyExchangeForm onCurrencyFormSubmit={this.onCurrencyFormSubmit} />
        </div>
        <div className="exchangeHistory">
          <p>Exchange History</p>
          {this.renderPreviousExchanges()}
        </div>
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
    createCurrencyExchange: (currencies) => dispatch(createCurrencyExchange(currencies)),
    fetchExchanges: (countryCode) => dispatch(fetchExchanges(countryCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchangeContainer)
