import React from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Geocode from "react-geocode";
const googleMapsAPI = require("../../config/keys").googleMapsAPI;

class GoogleMapsContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          initialCenter={{lat: 37.3382, lng: -121.8863}}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsAPI
})(GoogleMapsContainer)