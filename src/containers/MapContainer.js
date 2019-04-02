import React, { Component } from 'react';
import MapView from '../components/MapView'
import SearchView from '../components/SearchView'


class MapContainer extends Component {
  state = {
    searchTerm: '',
  }

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
