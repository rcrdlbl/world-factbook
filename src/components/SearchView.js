import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest'
import countryNames from '../static/country-names'



const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : countryNames.filter(country =>
    country.name.toLowerCase().slice(0, inputLength) === inputValue
  );
}

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name} -- {suggestion["alpha-3"]}
  </div>
)

class SearchView extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      suggestions: []
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested =({value}) => {
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
    const countryUrl = '/countries/' + suggestion['alpha-3']
    window.location.replace(countryUrl)
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Country',
      value,
      onChange: this.onChange
    }

      return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        highlightFirstSuggestion={true}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    )
  }
}

export default SearchView
