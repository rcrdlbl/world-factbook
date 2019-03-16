import React, { Component } from 'react';
import geoData from '../static/world-50m.json'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps"
import { geoPolyhedralWaterman } from 'd3-geo-polygon'

const wrapperStyles = {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
}

class MapView extends Component {
  projection(width, height, config) {
    return geoPolyhedralWaterman()
      .rotate(config.rotation)
      .scale(config.scale)
  }
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection={this.projection}
          projectionConfig={{
            scale: 100,
            rotation: [20, 0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,0]} disablePanning>
            <Geographies geography={geoData}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#000",
                      stroke: "#FFF",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#FFF",
                      stroke: "#000",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
            <Graticule />
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default MapView
