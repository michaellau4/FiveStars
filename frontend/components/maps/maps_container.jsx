import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './maps';


class GoogleMapsContainer extends React.Component {
  constructor() {

  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPIKEY__
})(GoogleMapsContainer)