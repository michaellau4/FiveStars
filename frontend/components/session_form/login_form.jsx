import React from 'react';

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

  guestLogin(e) {
    e.preventDefault();
    console.log(this.info);
    this.props.processForm(this.info);
  }

  render() {
    return (
      <div className="session-page">
        <div className="session-nav">
          <h3>ICON</h3>
        </div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div className="login-form">
              <br/>
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
              <input className="login-submit" type="submit" value={this.props.formType} />
              <br />
            </div>
          </form>
          <button onClick={this.guestLogin}>Login as Guest</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
