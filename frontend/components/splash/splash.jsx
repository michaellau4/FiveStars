import React from 'react';
import Navbar from '../navbar/navbar';
import { GoSearch } from "react-icons/go";
import Footer from '../footer/footer';
import HotCards from '../hot/cards';

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchBusinesses()
      .then(() => {this.setState({loaded: true})});
  }

  render() {
    console.log(this.props);
    if (!this.state.loaded) return <div>Loading...</div>;
    return (
      <div>
        <Navbar/>
        <div className="main-content-splash-container">
        </div>

        <div className="main-content-hot-businesses">
          <h2 className="location-header">Yelp San Jose</h2>
          <ul className="locations-container">
            <li>San Francisco</li>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Palo Alto</li>
            <li>Oakland</li>
            <li><GoSearch/>&nbsp;More Cities</li>
          </ul>
          <h3>Hot & New Businesses</h3>
          <HotCards businesses={this.props.businesses}/>
        </div> 

        <Footer />
      </div>
    )
  }
}

export default Splash;