import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

export const SignupRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.isAuthenticated === false
      ? <Component {...props} />
      : <Redirect to="/"/>
  )} />
)