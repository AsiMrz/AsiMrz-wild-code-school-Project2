
import React, { Component } from 'react';
import { Render } from 'react-dom';
import { L, Map, TileLayer, Marker, Popup, LeafletContext, Viewport, type } from 'react-leaflet';
//import './leaflet.css'

class MyMap extends React.Component {
  constructor (props) {
    super()props
    this.state = {
      lat: 47.2701114,
      lng: 5.8663153,
      zoom: 5,
      maxNativeZoom: 18,

    }

  }

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
        <Map center={position} zoom={this.state.zoom} style={{ height: 800 }}>
          <TileLayer
             url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             />
        </Map>
      )
  }
}

export default MyMap
