import React, { Component } from 'react';
import countryNames from '../static/country-names'
import { Link } from 'react-router-dom'

class CountryListView extends Component {
  render() {
    return (
      <div className="allCountries">{countryNames.map(country => <Link to={'/countries/' + country['alpha-3']}>{country.name},</Link>)}</div>
    )
  }
}

export default CountryListView
