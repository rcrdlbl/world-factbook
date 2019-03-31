import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLocation from '../components/UserLocation'
import { fetchUserLocation } from '../redux/actions/visitActions'


class LocationContainer extends Component {

  componentDidUpdate() {
    if (this.props.userLocationLoaded === false) {
      this.props.fetchUserLocation()
    }
  }

  render() {
    debugger;
    return(
      <>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUserLocation: () => dispatch(fetchUserLocation())
  })
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
    userLocationLoaded: state.userLocationLoaded
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)
