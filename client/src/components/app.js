import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';
import {ProtectedRoute, SignupRoute} from './protected_route';

import Header from './header';
import ClassifiedIndex from './classifieds/index';
import ClassifiedNew from './classifieds/new';
import ClassifiedPage from './classifieds/classified_page';
import SignIn from './sign_in';
import Login from './signin_facebook';
import Register from './register';
import ProfilePage from './profile_page';
import {loginUser, logoutUser} from '../actions'

class App extends Component {

  render(){
    const { dispatch, quote, isAuthenticated, errorMessage } = this.props;

    return(
      <div className="flex-container col">
         <Header />

          <Switch>
            <Route exact path="/" component={ClassifiedIndex} />
            <ProtectedRoute path="/me" component={ProfilePage} isAuthenticated={isAuthenticated}/>
            <ProtectedRoute path="/classified/new" component={ClassifiedNew} isAuthenticated={isAuthenticated}/>
            <Route path="/classified/show/:id" component={ClassifiedPage} isAuthenticated={isAuthenticated}/>
            <SignupRoute path="/register" component={Register} isAuthenticated={isAuthenticated}/>
            <SignupRoute path="/login" component={SignIn} isAuthenticated={isAuthenticated}/>
            <Route path="/fb" component={Login} />

          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  }
}

export default withRouter(connect(mapStateToProps, {loginUser, logoutUser})(App));
