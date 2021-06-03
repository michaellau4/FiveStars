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
import SplashContainer from './splash/splash_container';
import NotFoundPage from './notfound/not_found';


const App = ({currentUser, loggedIn}) => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <Route exact path="/" component={SplashContainer} />
      <Route path="*" component={NotFoundPage}/>
    </Switch> 
  </div>
);

export default App;