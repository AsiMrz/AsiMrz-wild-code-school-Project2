import React, { Component } from "react";
import '../components.css';
import MyMap from "../Map/index";

import SatelliteContainer from "../Satellite/SatelliteContainer";
//<!-- index.html -->
//<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />

class SatelliteStatus extends Component {

  // state = {
  //   viewport: {
  //     width: 400,
  //     height: 400,
  //     latitude: 37.7577,
  //     longitude: -122.4376,
  //     zoom: 8
  //   }
  // };

  render() {
    return (
      <div>
      <div id="container"><MyMap /></div>
      <div><SatelliteContainer /></div>
      </div>

    );
  }
}

export default SatelliteStatus;
