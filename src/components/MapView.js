import React, { Component } from 'react';
import geoData from '../static/world-50m.json'
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps"
import { geoPath } from "d3-geo"


const mapStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const MapView = (props) => (
  <div>
    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 220 }}
      style={mapStyles}
    >
      <ZoomableGlobe center={props.mapCenter ? props.mapCenter.reverse() : [0,0]}>
        <circle cx={250} cy={250} r={220} fill="transparent" stroke="#CFD8DC" />
        <Geographies
          disableOptimization
          geography={geoData}
        >
          {(geos, proj) =>
            geos.map((geo, i) => (
              <Geography
                key={geo.id + i}
                geography={geo}
                projection={proj}
                onClick={props.handleGeographyClick}
                style={{
                  default: {
                    fill: "#000",
                    stroke: "#FFF",
                  },
                   hover: {
                     fill: "#FFF",
                     stroke: "#000"
                   },
                   pressed: {
                     fill: "#FFF",
                     stroke: "#000",
                     outline: "none",
                   }
                }}
              />
            ))
          }
        </Geographies>
        <Graticule globe={true} stroke={"#000"} outline={false} step={[10, 10]} />
      </ZoomableGlobe>
    </ComposableMap>
  </div>
)

MapView.defaultProps = {
  center: [0, 0]
}

export default MapView
