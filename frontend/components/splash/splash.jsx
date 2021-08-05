import React from 'react';
import Navbar from '../navbar/navbar';
import { GoSearch } from "react-icons/go";
import {Link} from 'react-router-dom';
import BusinessContainer from '../business/business_container';
import { GoFlame } from "react-icons/go";
import Footer from '../footer/footer';

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
    if (!this.state.loaded) return null;
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
          <div className="hot-business-container">
            <div className="business-card">
              <div>
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/orBoJAlG4f4cC1tiFL-ByA/ls.jpg" alt="" />
                <div className="business-card-content">
                  <h3><Link className="card-title" to={`/businesses/${this.props.businesses[0].id}`}>{this.props.businesses[0].business_name}</Link></h3>  
                  <p>Breakfast, Sandwiches, Coffee and Tea</p>
                  <p>San Jose</p>
                  <p className="hot-business"><GoFlame/> Opened 4 weeks ago</p>               
                </div>
              </div>
            </div>
            <div className="business-card">
              <div>
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EQgpR2SsWpHoeex_WjmjLw/ls.jpg" alt="" />
                <div className="business-card-content">
                  <h3><Link className="card-title" to={`/businesses/${this.props.businesses[1].id}`}>{this.props.businesses[1].business_name}</Link></h3> 
                  <p>Donuts, Dessert</p>
                  <p>San Jose</p>
                  <p className="hot-business"><GoFlame/> Opened 3 weeks ago</p>
                </div>
              </div>
            </div>
            <div className="business-card">
              <div>
                <img src="https://s3-media0.fl.yelpcdn.com/bphoto/qhDrJ5AGkrvCV6v8bWM1sw/ls.jpg" alt="" />
                <div className="business-card-content">
                  <h3><Link className="card-title" to={`/businesses/${this.props.businesses[2].id}`}>{this.props.businesses[2].business_name}</Link></h3> 
                  <p>Drinks, Bubble Tea</p>
                  <p>San Jose</p>
                  <p className="hot-business"><GoFlame/> Opened 6 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
  )
  }
}

export default Splash;