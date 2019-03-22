import React, { Component } from 'react'

class CountryContainer extends Component {
  state = {
    countryInfo: []
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate() {
    this.fetchData()
  }

  fetchData = () => {
    const countryId = this.props.match.params.countryId
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryId}`).then(response => response.json()).then(data => {
      this.setState({
        countryInfo: data
      })
    })
  }

  render() {
    return(
      <>
      <div>
        <h1>{this.state.countryInfo.name} – {this.state.countryInfo.nativeName}</h1>

      </div>
      <div>
        <img className="countryflag" src={this.state.countryInfo.flag}></img>
      </div>
      </>
    )
  }
}
// TODO: make wikipedia component

export default CountryContainer
