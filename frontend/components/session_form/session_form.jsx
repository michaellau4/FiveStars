import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      zipcode: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="signup-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-page">
        <div className="session-nav">
          <div className="logo-container">
            <Link to="/" className="header-link">
              <img className="logo" src="https://i.imgur.com/v4VEQlh.png"/>
            </Link>
          </div>
        </div>
        <div className="main-content">
          <div className="login-form-wrapper">
            <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <br/>
                Already on FiveStars? {this.props.navLink}
                {this.renderErrors()}
                <div className="login-form">
                  <br/>
                  <div className="name-container">
                    <label>
                      <input type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')}
                        className="login-input"
                        placeholder="First Name"
                      />
                    </label>
                    <br/>
                    <label>
                      <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                        className="login-input"
                        placeholder="Last Name"
                      />
                    </label>
                  </div>
                  <br />
                  <label>
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="login-input"
                      placeholder="Email"
                    />
                  </label>
                  <br/>
                  <label>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                      placeholder="Password"
                    />
                  </label>
                  <br/>
                  <label>
                    <input type="text"
                      value={this.state.zipcode}
                      onChange={this.update('zipcode')}
                      className="login-input"
                      placeholder="ZIP"
                    />
                  </label>
                  <br/>
                  <button className="session-submit"><span>Sign Up</span></button>
                </div>
              </form>
            </div>
          </div>
          <div className="picture-wrapper">
            <div className="picture-container">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
            </div>
          </div>
        </div>
       <Footer/>
      </div>
    );
  }
}

export default SessionForm;
