import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { HiCog } from "react-icons/hi";
import { IoPerson, IoPeopleSharp } from "react-icons/io5";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false
    }
    this.toggleList = this.toggleList.bind(this);
  }

  sessionLinks() {
    return (
    <nav className="login-signup">
      <Link to="/login">Log In</Link>
      &nbsp; &nbsp;
      <button className="signup-button" onClick={()=>this.props.history.push("/signup")}> 
      Sign Up</button>
    </nav>
    )
  }

  toggleList() {
    this.setState(prevState => ({listOpen: !prevState.listOpen}))
  }

  personalGreeting() {
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
  }

  render() {
    return this.props.currentUser ? this.personalGreeting() : this.sessionLinks()
  }
}

export default withRouter(Greeting);

