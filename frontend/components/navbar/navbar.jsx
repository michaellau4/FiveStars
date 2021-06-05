import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
import { GoSearch } from "react-icons/go";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSplash() {
    return (
      <div className="homepage-hero">
        <div className="nav-container">
          <div className="nav-header">
            <span>
              <a>Write a Review</a>
              <a>Events</a>
              <a>Talk</a>
            </span>
            <GreetingContainer/>
          </div>
        </div>
        <div className="splash-content">
          <div className="main-logo">
            <img src="https://i.imgur.com/v4VEQlh.png" alt="" />
          </div>
          <div className="main-search-bar">
            <div className="find-input-wrapper">
              Find
              <input type="text" />
            </div>
            <div className="near-input-wrapper">
              Near
              <input type="text" />

            </div>
            <button><GoSearch className="search-icon"/></button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let currPath = this.props.location.pathname;
    return (
      <div>
        {currPath === '/signup' || currPath === '/login' ? null : this.onSplash()}
      </div>
    )
  }
};

export default withRouter(Navbar);