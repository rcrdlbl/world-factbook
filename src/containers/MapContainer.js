import React, { Component } from 'react';
import MapView from '../components/MapView'
import SearchView from '../components/SearchView'
import { Link } from 'react-router-dom'


class MapContainer extends Component {
  state = {
    searchTerm: '',
  }

  render() {
    return (
      <div>
        <SearchView />
        <MapView className="frontMap"></MapView>
        <div className='creditsLink'>WORLD FACTBOOK <Link to='/credits'>credits</Link> <a href='http://przemyslaw.org'>przemyslaw.org</a></div>
      </div>
    )
  }
}

export default MapContainer
