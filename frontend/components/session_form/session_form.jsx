import React from 'react';
import {Link} from 'react-router-dom';

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
      <ul>
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
          <Link to="/" className="header-link">
            <h1>Yelp</h1>
          </Link>
        </div>
        <div className="main-content">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <br/>
              Please {this.props.formType} or {this.props.navLink}
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <label>First:
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>Last:
                  <input type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    className="login-input"
                  />
                </label>
                <label>Email:
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>ZIP Code:
                  <input type="password"
                    value={this.state.zipcode}
                    onChange={this.update('zipcode')}
                    className="login-input"
                  />
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
          <div className="picture-container">
            <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
