import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
  <div>
    <div className="homepage-hero">
      <nav className="header-nav">
        <div className="header-links">
          <a href="">Write a Review</a>
          <a href="">Events</a>
          <a href="">Talk</a>
        </div>
        <div className="header-account-links">
          <header>
            <Link to="/" className="header-link">
              <h1>FIVESTARS</h1>
            </Link>
            <GreetingContainer />
          </header>
          <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          </Switch>
        </div>
      </nav>
    </div>
  </div>
);

export default App;