import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountryBasic extends Component {
  render() {
    return (
      <>
      <div className="countryBasic">
        <Link to="/" className="searchLink">««search</Link>
        <h1>{this.props.countryInfo.name}</h1>
        <h1 className="countryNativeName">{this.props.countryInfo.nativeName}</h1>
        <img alt={"Flag of" + this.props.countryInfo.name} className="countryflag" src={this.props.countryInfo.flag}></img>
      </div>
      </>
    )
  }
}

export default CountryBasic
