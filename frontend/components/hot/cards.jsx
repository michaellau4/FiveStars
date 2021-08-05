import React from 'react';
import { GoFlame } from "react-icons/go";
import {Link} from 'react-router-dom';

const HotCards = (props) => {
  console.log(props);
  return (
    <div className="hot-business-container">
      <div className="business-card">
        <div>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/orBoJAlG4f4cC1tiFL-ByA/ls.jpg" alt="" />
          <div className="business-card-content">
            <h3><Link className="card-title" to={`/businesses/${props.businesses[0].id}`}>{this.props.businesses[0].business_name}</Link></h3>  
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
            <h3><Link className="card-title" to={`/businesses/${props.businesses[1].id}`}>{this.props.businesses[1].business_name}</Link></h3> 
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
            <h3><Link className="card-title" to={`/businesses/${props.businesses[2].id}`}>{this.props.businesses[2].business_name}</Link></h3> 
            <p>Drinks, Bubble Tea</p>
            <p>San Jose</p>
            <p className="hot-business"><GoFlame/> Opened 6 weeks ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotCards;