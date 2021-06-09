import React from "react";
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
import BusinessContainer from './business/business_container';


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <Route exact path="/businesses/:businessId" component={BusinessContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/businesses/:businessId/createReview" component={}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch> 
  </div>
);

export default App;