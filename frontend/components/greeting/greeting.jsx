import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { HiCog } from "react-icons/hi";
import { IoPerson, IoPeopleSharp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { SiAngellist } from "react-icons/si";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false
    }
    this.toggleList = this.toggleList.bind(this);
  }

  sessionLinks() {
    if (this.props.history.location.pathname === "/") {
      return (
        <nav className="login-signup">
          <Link to="/login" className="log-in">Log In</Link>
          &nbsp; &nbsp;
          <button className="signup-button" onClick={()=>this.props.history.push("/signup")}> 
          Sign Up</button>
        </nav>
      )
    } else {
      return (
        <nav className="navbar-login-signup">
          <span>
            <a className="navbar-linkedin-icon" href="https://www.linkedin.com/in/michaelslau/"><IoLogoLinkedin size={36}/></a>
            <a className="navbar-github-icon" href="https://github.com/michaellau4/FiveStars"><AiFillGithub size={36}/></a>
            <a className="navbar-angel-icon" href="https://angel.co/u/michael-lau-30"><SiAngellist size={36}/></a>
          </span>
          <Link to="/login" className="navbar-log-in">Log In</Link>
          &nbsp; &nbsp;
          <button className="navbar-signup-button" onClick={()=>this.props.history.push("/signup")}> 
          Sign Up</button>
        </nav>
      )
    }
  }

  toggleList() {
    this.setState(prevState => ({listOpen: !prevState.listOpen}))
  }

  personalGreeting() {
    if (this.props.history.location.pathname === "/") {
      return (
        <hgroup className="header-group">
          <div className="drop-down-avatar" onClick={this.toggleList}>
            <div className="user-img">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/user_60_square.yji-514f6997a3184af475d5adc800b6d0b1.png" />
            </div>
            {this.state.listOpen ? 
              <div className="drop-down-items">
                <div className="user-info-container">
                  <img src="https://s3-media0.fl.yelpcdn.com/assets/public/user_60_square.yji-514f6997a3184af475d5adc800b6d0b1.png" />
                  <div>
                    <h3>{this.props.currentUser.first_name} {this.props.currentUser.last_name} </h3>
                  </div>
                </div>
                <div className="about-me">
                  <IoPerson/>
                  <h3>About Me</h3>
                </div>
                <div className="find-friends">
                  <IoPeopleSharp/>
                  <h3>Find Friends</h3>
                </div>
                <div className="account-settings">
                  <HiCog/>
                  <h3>Account Settings</h3>
                </div>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
              </div> :
              null
            }
          </div>
        </hgroup>
      ) 
    } else {
      return (
        <hgroup className="navbar-header-group">
          <span>
            <a className="navbar-linkedin-icon" href="https://www.linkedin.com/in/michaelslau/"><IoLogoLinkedin size={36}/></a>
            <a className="navbar-github-icon" href="https://github.com/michaellau4/FiveStars"><AiFillGithub size={36}/></a>
          </span>
          <div className="drop-down-avatar" onClick={this.toggleList}>
            <div className="user-img">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/user_60_square.yji-514f6997a3184af475d5adc800b6d0b1.png" />
            </div>
            {this.state.listOpen ? 
              <div className="drop-down-items">
                <div className="user-info-container">
                  <img src="https://s3-media0.fl.yelpcdn.com/assets/public/user_60_square.yji-514f6997a3184af475d5adc800b6d0b1.png" />
                  <div>
                    <h3>{this.props.currentUser.first_name} {this.props.currentUser.last_name} </h3>
                  </div>
                </div>
                <div className="about-me">
                  <IoPerson/>
                  <h3>About Me</h3>
                </div>
                <div className="find-friends">
                  <IoPeopleSharp/>
                  <h3>Find Friends</h3>
                </div>
                <div className="account-settings">
                  <HiCog/>
                  <h3>Account Settings</h3>
                </div>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
              </div> :
              null
            }
          </div>
        </hgroup>
      )
    }
  }

  render() {
    return this.props.currentUser ? this.personalGreeting() : this.sessionLinks()
  }
}

export default withRouter(Greeting);

