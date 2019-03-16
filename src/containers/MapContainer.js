import React, { Component } from 'react';
import MapView from '../components/MapView'

class MapContainer extends Component {
  state = {
    searchTerm: ''
  }
  render() {
    return (
      <div>
        <MapView></MapView>
      </div>
    )
  }
}

export default MapContainer
