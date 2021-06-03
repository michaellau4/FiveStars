import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <div className="session-nav error">
          <Link to="/" className="header-link">
            <h1>Yelp</h1>
          </Link>
        </div>
        <div className="error-container">
          <p style={{textAlign:"center"}}>
            404 error. Doggone it! The page you’re looking for cannot be found.
            <Link to="/">Go to Home </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage;