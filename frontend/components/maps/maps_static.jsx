import React from 'react';
import Geocode from "react-geocode";
Geocode.setApiKey(`"${window.googleAPIKey}"`);

class StaticBusinessMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: this.props.business.address,
      state: this.props.business.state,
      city: this.props.business.city,
      coords: {
        lat: "",
        lng: ""
      }
    }
  }

  componentDidMount() {
    let geocode = this.state.address + " " + this.state.city + " " + this.state.state;
    Geocode.fromAddress(geocode).then(response => {
      const {lat, lng} = response.results[0].geometry.location;
      this.setState({coords: {lat, lng}})
    })
  }

  render() {
    return (
      <div className="static-map">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.coords.lat},${this.state.coords.lng}&zoom=13&size=400x200&maptype=roadmap
          &markers=color:red%7Clabel:C%7C${this.state.coords.lat},${this.state.coords.lng}
          &key=${window.googleAPIKey}`} alt="" />
      </div>
    )
  }
}

export default StaticBusinessMap;