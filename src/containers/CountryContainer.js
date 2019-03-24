import React, { Component } from 'react'
import CountryBasic from '../components/CountryBasic'
import WikiView from '../components/WikiView'
import countryNames from '../static/country-names'
import MapView from '../components/MapView'


class CountryContainer extends Component {
  state = {
    countryInfo: [],
    wikiInfo: [],
    isLoading: true
  }

  findCountryName = (countryCode) => {
    const found = countryNames.filter(
      function(country) {return country['alpha-3'] === countryCode}
    )
    return found[0].name
    debugger
  }

  componentDidMount() {
    this.fetchData()
    this.fetchWikiData()
  }

  // componentDidUpdate() {
  //   this.fetchData()
  // }

  fetchWikiData = () => {
      const countryName =  this.findCountryName(this.props.match.params.countryId)
      fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${countryName}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          wikiInfo: data,
          isLoading: false
        })
      })
  }

  fetchData = () => {
    const countryId = this.props.match.params.countryId
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryId}`).then(response => response.json()).then(data => {
      this.setState({
        countryInfo: data,
      })
    })
  }

  // checkWikiInfo = () => {
  //   if (this.state.wikiInfo !== []) {
  //     return "Wiki Info Loading"
  //   } else {
  //     return this.state.wikiInfo.query.pages[Object.keys(this.state.wikiInfo.query.pages)[0]].extract
  //   }
  // }

  render() {
    return(
      <>
      <CountryBasic countryInfo={this.state.countryInfo}  />
      {this.state.isLoading && <h3>Wikipedia Loading</h3>}
      {!this.state.isLoading && <WikiView wikiInfo={this.state.wikiInfo}  />}
      <MapView mapCenter={this.state.countryInfo.latlng} />
      </>
    )
  }
}
// TODO: make wikipedia component

export default CountryContainer
