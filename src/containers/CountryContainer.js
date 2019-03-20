import React, { Component } from 'react'

class CountryContainer extends Component {
  render() {
    console.log(this.props.match)
    return(
      <div>"COUNTRY CONTAINER"</div>
    )
  }
}

export default CountryContainer
