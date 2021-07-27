import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.info = {email: "guest", password: "password"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
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
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestLogin(e) {
    e.preventDefault();
    console.log(this.info);
    this.props.processForm(this.info);
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
                New to FiveStars? {this.props.navLink}
                {this.renderErrors()}
                <div className="login-form">
                  <br/>
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
                  <button className="session-submit"><span>Log In</span></button>
                  <br />
                </div>
              </form>
              <form>
                <button className="session-submit" onClick={this.guestLogin}><span>Log In As Guest</span></button>
              </form>
            </div>
          </div>
          <div className="picture-wrapper">
            <div className="picture-container">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
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
    );
  }
}

export default LoginForm;
