import React, {Component} from 'react'
import Autosuggest from 'react-autosuggest'
import countryNames from '../static/country-names'

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0 ? [] : countryNames.filter(country =>
    country.name.toLowerCase().slice(0, inputLength) === inputValue
  )
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
)


class CurrencyExchangeForm extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      suggestions: []
    }
  }

  onChange = (event, {newValue}) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  onSuggestionSelected = (event, {suggestion}) => {
    this.props.onCurrencyFormSubmit(suggestion['alpha-3'])
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Enter Country',
      value,
      onChange: this.onChange
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={this.onSuggestionSelected}
        inputProps={inputProps}
      />
    )
  }
}


export default CurrencyExchangeForm
