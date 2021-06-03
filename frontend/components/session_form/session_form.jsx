import React from 'react';

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
          <h3>ICON</h3>
        </div>
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
      </div>
    );
  }
}

export default SessionForm;
