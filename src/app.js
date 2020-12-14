import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

// this component should show what out app is doing
// so it should container react router here instead of 
// home page or any page related component
export default function App() {
  return (
    <Router>

      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>

      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

    </Router>
  );
}
