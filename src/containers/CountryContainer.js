import React, { Component } from 'react'
import CountryBasic from '../components/CountryBasic'
import WikiView from '../components/WikiView'
import countryNames from '../static/country-names'
import MapView from '../components/MapView'
import reticle from '../static/reticle_animated.svg'
import CurrencyExchangeContainer from './CurrencyExchangeContainer'
import ReactSVG from 'react-svg'


class CountryContainer extends Component {
  state = {
    countryInfo: [],
    wikiInfo: [],
    wikiLoading: true,
    infoLoading: true
  }

  findCountryName = (countryCode) => {
    const found = countryNames.filter(
      function(country) {return country['alpha-3'] === countryCode}
    )
    return found[0].name
  }


  componentDidMount() {
    this.fetchData()
    this.fetchWikiData()
  }

  fetchWikiData = () => {
      const countryName =  this.findCountryName(this.props.match.params.countryId)
      fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${countryName}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          wikiInfo: data,
          wikiLoading: false
        })
      })
  }

  fetchData = () => {
    const countryId = this.props.match.params.countryId
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryId}`).then(response => response.json()).then(data => {
      this.setState({
        countryInfo: data,
        infoLoading: false
      })
    })
  }

  render() {
    return(
      <>
      <div className="countryGrid">
        <div className="box box1">
          <CountryBasic countryInfo={this.state.countryInfo}  />
        </div>
        <div className="box box2">
          {this.state.wikiLoading && <h3>Wikipedia Loading</h3>}
          {!this.state.wikiLoading && <WikiView wikiInfo={this.state.wikiInfo}  />}
        </div>
        <div className="box box3">
          <div className="countryGlobe">
            <MapView className="MapView" mapCenter={this.state.countryInfo.latlng} />
            <ReactSVG src={reticle} svgClassName="reticle" />
            />
          </div>
        </div>
        <div className="box box4">
          {this.state.infoLoading && <h3>Forex Loading</h3>}
          {!this.state.infoLoading && <CurrencyExchangeContainer  currency={this.state.countryInfo.currencies} />}
        </div>
      </div>
      </>
    )
  }
}
// TODO: make wikipedia component

export default CountryContainer
