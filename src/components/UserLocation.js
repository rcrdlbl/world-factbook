import React, { Component } from 'react'

class UserLocation extends Component {
  render() {
    return(
      <div>{this.props.userLocation.city}</div>
    )
  }
}

export default UserLocation
