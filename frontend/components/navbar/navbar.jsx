import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSplash() {
    return (
      <div className="homepage-hero">
        <div className="nav-header">
          <span>
            <a>Write a Review</a>
            <a>Events</a>
            <a>Talk</a>
          </span>
          <GreetingContainer/>
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