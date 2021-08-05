import React from 'react';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';
import Geocode from "react-geocode";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMarker: {},
      markers: [],
      showInfo: false,
      selected: {
        info: {
          id: "",
          businessName: "",
          photo: "",
          tags: ""
        }
      }
    }
    this.openInfoWindow = this.openInfoWindow.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  componentDidMount() {
    Geocode.setApiKey(window.googleAPIKey);
    this.props.businesses.map(business => {
      let address = business.address + "%" + business.city + "%" + business.state;
      Geocode.fromAddress(address).then((response) => {
        const {lat, lng} = response.results[0].geometry.location;
        let markerInfo = {
          id: business.id,
          name: business.business_name,
          photo: business.photoUrls[0],
          tags: business.tags,
          coords: {lat, lng}
        }
        let oldMarkers = this.state.markers;
        oldMarkers = oldMarkers.concat(markerInfo);
        this.setState({markers: oldMarkers});
      },
      (error) => {
        console.error(error);
      })
    })
  }

  openInfoWindow(props, marker) {
    console.log(props)
    this.setState({
      selected: props,
      activeMarker: marker,
      showInfo: true
    })
  }

  closeInfo(props) {
    if (this.state.showInfo) {
      this.setState({
        showInfo: false,
        activeMarker: null
      })
    }
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const style = {
      width: '100vh',
      height: '100vw'
    }
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          initialCenter={{lat: 37.3382, lng: -121.8863}}>
          {this.state.markers.map((markerInfo, idx) => (
            <Marker
              position={markerInfo.coords}
              key={idx}
              info={markerInfo}
              onClick={this.openInfoWindow}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showInfo}
            onClose={this.onClose}>
            <div className="info-window">
              <img className="info-window-photo" src={this.state.selected.info.photo} alt="" />
              <a href={`/#/businesses/${this.state.selected.info.id}`} className="info-window-title">
                {this.state.selected.info.name}
              </a>
            </div>
            {/* <h3>
              {this.state.selected.info.tags.map((tag, idx) => (
                <div key={idx}>{tag.tag}</div>
              ))}
            </h3> */}
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper((props) => {
  return {apiKey: window.googleAPIKey}
})(GoogleMapsContainer)