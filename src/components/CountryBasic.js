import React, { Component } from 'react'

class CountryBasic extends Component {
  render() {
    return (
      <>
      <div>
        <h1>{this.props.countryInfo.name} – {this.props.countryInfo.nativeName}<img alt={"Flag of" + this.props.countryInfo.name} className="countryflag" src={this.props.countryInfo.flag}></img></h1>
      </div>
      </>
    )
  }
}

export default CountryBasic
