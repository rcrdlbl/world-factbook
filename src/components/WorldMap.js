import React, { Component } from "react"
import geoData from '../static/world-50m.json'
import {
  ComposableMap,
  ZoomableGroup,
  ZoomableGlobe,
  Geographies,
  Geography,
} from "react-simple-maps"
import { geoPath, centroid } from "d3-geo"

class WorldMap extends Component {
  static defaultProps = {
    width: 800,
    height: 800,
  }
  constructor() {
    super()
    this.state = {
      center: [0,0],
      zoom: 1,
      currentCountry: null,
    }
    this.projection = "orthographic"
    this.handleGeographyClick = this.handleGeographyClick.bind(this)
  }

  handleGeographyClick(geography) {
    // geography looks something like this:
    // { type: "Feature",  properties: {...}, geometry: {...} }
    const path = geoPath().projection(this.projection)
    const centroid = path.centroid(geography)
    this.setState({
      center: centroid,
      zoom: 1,
      currentCountry: geography.properties.iso_a3,
    })

  }
  render() {
    return (
      <div>
        <ComposableMap
          width={this.props.width}
          height={this.props.height}
          projection="orthographic"
          >
          <ZoomableGlobe center={this.state.center} zoom={this.state.zoom}>
            <Geographies geography={geoData} disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={`geography-${i}`}
                    cacheId={`path-${i}`}
                    geography={geography}
                    projection={projection}
                    onClick={this.handleGeographyClick}
                  />
                ))
              }
            </Geographies>
          </ZoomableGlobe>
        </ComposableMap>
      </div>
    )
  }
}

export default WorldMap
