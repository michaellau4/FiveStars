import React from 'react';
import Navbar from '../navbar/navbar';
import { GoSearch } from "react-icons/go";


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
          <li><GoSearch/> More Cities</li>
        </ul>
        <h3>Hot & New Businesses</h3>
        <div className="hot-business-container">
          <div className="business-card">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/orBoJAlG4f4cC1tiFL-ByA/ls.jpg" alt="" />
            <h3>Egghead</h3>  
            <p>Breakfast, Sandwiches, Coffee and Tea</p>
            <p>San Jose</p>
          </div>
          <div className="business-card">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EQgpR2SsWpHoeex_WjmjLw/ls.jpg" alt="" />
            <h3>Mochill Mochi Donut</h3>
            <p>Donuts, Dessert</p>
            <p>San Jose</p>
          </div>
          <div className="business-card">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/qhDrJ5AGkrvCV6v8bWM1sw/ls.jpg" alt="" />
            <h3>Urban Ritual</h3>
            <p>Drinks, Bubble Tea</p>
            <p>San Jose</p>
          </div>
        </div>
      </div>

      <div className="main-footer-container">
          <div className="main-footer">
            <div className="footer-content-container">

            </div>
            <footer className="footer-background">
              <h3>bottom</h3>
            </footer>
          </div>
        </div>
    </div>
  )
};

export default Splash;