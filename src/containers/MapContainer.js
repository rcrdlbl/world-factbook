import React, { Component } from 'react';
import MapView from '../components/MapView'
import SearchView from '../components/SearchView'


class MapContainer extends Component {
  state = {
    searchTerm: '',
  }

  // handleGeographyClick(geography) {
  //   // geography looks something like this:
  //   // { type: "Feature",  properties: {...}, geometry: {...} }
  //   const path = geoPath().projection(this.projection())
  //   const centroid = this.projection().invert(path.centroid(geography))
  //   this.setState({
  //     center: centroid,
  //     currentCountry: geography.properties.iso_a3,
  //   })
  //
  // }

  render() {
    return (
      <div>
        <SearchView />
        <MapView></MapView>
      </div>
    )
  }
}

export default MapContainer
