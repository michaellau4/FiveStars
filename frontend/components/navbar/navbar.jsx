import React from 'react';
import { withRouter } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
import Search from '../search/search';
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { SiAngellist } from "react-icons/si";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSplash() {
    return (
      <div className="homepage-hero">
        <div className="y-container">
          <div className="nav-container">
            <div className="nav-header">
              <span>
                <a className="nav-linkedin-icon" href="https://www.linkedin.com/in/michaelslau/"><IoLogoLinkedin size={36}/></a>
                <a className="nav-github-icon" href="https://github.com/michaellau4/FiveStars"><AiFillGithub size={36}/></a>
                <a className="nav-angel-icon" href="https://angel.co/u/michael-lau-30"><SiAngellist size={36}/></a>
              </span>
              <GreetingContainer/>
            </div>
          </div>
          <div className="splash-content">
            <div className="main-logo">
              <img src="https://i.imgur.com/v4VEQlh.png" alt="" />
            </div>
            <Search/>
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