import React from 'react';
import Navbar from '../navbar/navbar';
import { GoSearch } from "react-icons/go";
import {Link} from 'react-router-dom';
import BusinessContainer from '../business/business_container';
import { GoFlame } from "react-icons/go";



const Splash = (props) => {
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
                <h3><Link to="/businesses/1">Egghead</Link></h3>  
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
                <h3><Link to="/businesses/2">Mochill Mochi Donut</Link></h3> 
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
                <h3><Link to="/businesses/3">Urban Ritual</Link></h3> 
                <p>Drinks, Bubble Tea</p>
                <p>San Jose</p>
                <p className="hot-business"><GoFlame/> Opened 6 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-footer-container">
        <div className="main-footer">
          <div className="footer-content-container">

          </div>
          <footer className="footer-background">
        
          </footer>
        </div>
      </div>
    </div>
  )
};

export default Splash;